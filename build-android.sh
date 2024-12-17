#!/bin/sh

set -e

script_dir="$(readlink -f $(dirname "$0"))"
cd $script_dir

target="dist/android"
git clean -fdx $target

versionCode=$(git tag -l | wc -l)

sourceFolder="apps/travel-packlist"

environment="$(cat $sourceFolder/src/environment/env.json)"
echo "$environment" | jq -M ".versionCode=$versionCode" > $sourceFolder/src/environment/env.json

trap "git restore $sourceFolder/src/environment/env.json" EXIT

sh build-webapp.sh --configuration android

pnpm cap add android

pnpm cap sync

pnpm exec nx run travel-packlist:generate-assets --type android

sed -i "s/versionName.*/versionName $(npm pkg get version)/" $target/app/build.gradle
sed -i "s/versionCode.*/versionCode $versionCode/" $target/app/build.gradle

(cd $target && ./gradlew --no-daemon assemble)
mv $target/app/build/outputs/apk/debug/app-debug.apk $target/travel-packlist-debug.apk

if [ ! -f "release.jks" ]; then
    if [ -n "$RELEASE_KEYSTORE" ]; then
        echo "$RELEASE_KEYSTORE" | base64 -d > release.jks
    else
        echo "No RELEASE_KEYSTORE environment variable found"
        error=1
    fi
fi

if [ -z "$RELEASE_KEYSTORE_PASSWORD" ]; then
    echo "No RELEASE_KEYSTORE_PASSWORD environment variable found"
    error=1
fi

if [ -z "$RELEASE_KEYSTORE_ALIAS" ]; then
    echo "No RELEASE_KEYSTORE_ALIAS environment variable found"
    error=1
fi

if [ -z "$RELEASE_KEYSTORE_ALIAS_PASSWORD" ]; then
    echo "No RELEASE_KEYSTORE_ALIAS_PASSWORD environment variable found"
    error=1
fi

if [ -n "$error" ]; then
    exit 1
fi

pnpm cap build android --keystorepath "$script_dir/release.jks" --keystorepass $RELEASE_KEYSTORE_PASSWORD --keystorealias $RELEASE_KEYSTORE_ALIAS --keystorealiaspass $RELEASE_KEYSTORE_ALIAS_PASSWORD --androidreleasetype AAB
mv $target/app/build/outputs/bundle/release/app-release-signed.aab $target/travel-packlist.aab
