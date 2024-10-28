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

for lang in de
do
   pnpm run build --base-href $base_href --configuration=$lang --delete-output-path=false

   cat $target/$lang/index.html \
      | sed "s|<base href=.*|<base href=\"$base_href\">|g" \
      > $target/index.$lang.html

   cp $target/$lang/polyfills*.js $target/$lang/main*.js $target

   rm -rf $target/$lang

done

npx ngsw-config dist/browser ngsw-config.json
