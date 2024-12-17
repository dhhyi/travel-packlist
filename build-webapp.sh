#!/bin/sh

set -e
# prevent mingw path conversion
export MSYS_NO_PATHCONV=1

while [ $# -gt 0 ]; do
    case $1 in
        --base-href)
            base_href="$2"
            shift
            shift
            ;;
        --configuration)
            configuration="$2"
            shift
            shift
            ;;
        *)
            echo "Unknown option $1"
            echo "Usage: $0 [--base-href <base-href>] [--configuration <configuration>]"
            exit 1
            ;;
    esac
done

target="dist/web"
base_href="${base_href:-/}"
build="${configuration:-production}"

rm -Rf "$target"
mkdir -p "$target"

sourceFolder="apps/travel-packlist"

environment="$(cat $sourceFolder/src/environment/env.json)"
echo "$environment" | jq -M ".version=$(npm pkg get version)" | jq -M ".git_hash=\"$(git rev-parse HEAD)\"" | jq -M ".build_time=$(date +%s)" > $sourceFolder/src/environment/env.json

trap "git restore $sourceFolder/src/environment/env.json" EXIT

pnpm nx build travel-packlist --localize --base-href=$base_href --configuration=$build --verbose

buildFolder="dist/$sourceFolder/browser"

for folder in $(ls $buildFolder); do
    (
        cd $buildFolder/$folder
        echo "Fixing file hashes in $PWD"
        for run in initial 2nd 3rd 4th 5th 6th; do
            find . -type f | grep -E "\b[0-9A-Za-f]{8}\b" | xargs -i{} basename {} | while read file; do
                sha1=$(sha1sum $file | cut -d' ' -f1 | cut -c-8)
                fileHash=$(echo $file | grep -oE "\b[0-9A-Za-f]{8}\b")
                if [ "$sha1" = "$fileHash" ]; then
                    continue
                fi
                newFile=$(echo $file | sed -E "s/\b[0-9A-Za-f]{8}\b/$sha1/")
                find . -type f | xargs -rl sed -i "s/$file/$newFile/g"
                mv $file $newFile
            done
        done
    )
done

cp $buildFolder/en/*.* $target

cat $buildFolder/en/index.html \
    | sed "s|<base href=.*|<base href=\"$base_href\">|g" \
        > $target/index.html

if [ "$base_href" != "/" ]; then
    manifest="$(cat $target/manifest.json)"
    echo "$manifest" | jq -M ".start_url=\"$base_href\"" > $target/manifest.json
fi

for lang in de; do
    cat $buildFolder/$lang/index.html \
        | sed "s|<base href=.*|<base href=\"$base_href\">|g" \
            > $target/index.$lang.html

    cp $buildFolder/$lang/polyfills*.js \
        $buildFolder/$lang/main*.js \
        $buildFolder/$lang/chunk*.js \
        $buildFolder/$lang/styles*.css \
        $target
done

if [ -f $target/ngsw.json ]; then
    npx ngsw-config $target $sourceFolder/ngsw-config.json "$base_href"
fi
