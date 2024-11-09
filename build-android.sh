#!/bin/sh

script_dir="$(readlink -f $(dirname "$0"))"
cd $script_dir

git clean -fdx android dist

pnpm cap add android

sh build-gh-pages.sh --configuration production,android

pnpm cap sync

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

sed -i "s/versionName.*/versionName $(npm pkg get version)/" android/app/build.gradle

mkdir -p dist/android

(cd android && ./gradlew assemble)
mv android/app/build/outputs/apk/debug/app-debug.apk dist/android/travel-packlist-debug.apk

pnpm cap build android --keystorepath "$script_dir/release.jks" --keystorepass $RELEASE_KEYSTORE_PASSWORD --keystorealias $RELEASE_KEYSTORE_ALIAS --keystorealiaspass $RELEASE_KEYSTORE_ALIAS_PASSWORD --androidreleasetype AAB
mv android/app/build/outputs/bundle/release/app-release-signed.aab dist/android/travel-packlist.aab
