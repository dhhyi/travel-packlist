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
            exit 1
            ;;
    esac
done

target="dist/browser"
base_href="${base_href:-/}"
build="${configuration:-production}"

environment="$(cat src/environment/env.json)"
echo "$environment" | jq -M ".version=$(npm pkg get version)" | jq -M ".git_hash=\"$(git rev-parse HEAD)\"" | jq -M ".build_time=$(date +%s)" > src/environment/env.json

trap 'git restore src/environment/env.json' EXIT

pnpm run build --base-href=$base_href --configuration=$build

if [ "$base_href" != "/" ]; then
    manifest="$(cat $target/manifest.json)"
    echo "$manifest" | jq -M ".start_url=\"$base_href\"" > $target/manifest.json
fi

for lang in de; do
    pnpm ng build --base-href=$base_href --configuration=$build,$lang --delete-output-path=false

    cat $target/$lang/index.html \
        | sed "s|<base href=.*|<base href=\"$base_href\">|g" \
            > $target/index.$lang.html

    cp $target/$lang/polyfills*.js \
        $target/$lang/main*.js \
        $target/$lang/chunk*.js \
        $target/$lang/styles*.css \
        $target

    rm -rf $target/$lang

done

if [ -f $target/ngsw.json ]; then
    npx ngsw-config dist/browser ngsw-config.json "$base_href"
fi
