#!/bin/sh

set -e

base_href="${1:-"/travel-packlist/"}"
target="dist/browser"

environment="$(cat src/environment/env.json)"
echo "$environment" | jq -M ".version=$(npm pkg get version)" | jq -M ".git_hash=\"$(git rev-parse HEAD)\"" | jq -M ".build_time=$(date +%s)" > src/environment/env.json

trap 'git restore src/environment/env.json' EXIT

pnpm run build --base-href $base_href
manifest="$(cat $target/manifest.json)"
echo "$manifest" | jq -M ".start_url=\"$base_href\"" > $target/manifest.json

pnpm run build --base-href $base_href --configuration=de --delete-output-path=false

cat $target/de/index.html \
   | sed "s|<base href=.*|<base href=\"$base_href\">|g" \
   > $target/index.de.html

mainJs="$(basename $(ls $target/de/main*.js))"
cat $target/de/$mainJs \
   | sed "s|ngsw-worker\.js|ngsw-worker.de.js|g" \
   > $target/$mainJs

cat $target/de/ngsw-worker.js \
   | sed "s|ngsw.json|ngsw.de.json|g" \
   > $target/ngsw-worker.de.js

cat $target/de/ngsw.json \
   | sed "s|/de/|/|g" \
   | sed 's|index.html|index.de.html|g' \
   > $target/ngsw.de.json

cp $target/de/polyfills*.js $target

rm -rf $target/de
