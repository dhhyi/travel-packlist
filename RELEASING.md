# Releasing

## Check contents of the release

Either check the git log since the last tag or run `pnpm run changelog -u` to see the changelog including the unreleased content.

Depending on the content, release:

- a **patch** version if the changes only fix bugs.
- a **minor** version if the changes also add functionality.

## Create a new release

Run `pnpm run version <patch|minor>` (see above) to create a new release.
This will use npm built-in versioning to bump the version in `package.json` and create an entry to the `CHANGELOG.md`.
This will also push both the tag and the main branch to the upstream repository.

> The Android App needs a new version code for every release which is currently calculated by [counting the number of tags](./tools/versioning/src/lib/versioning.ts) in the repository.

## Publish the release

The pipeline will automatically build all the artifacts (Android and GitHub Pages) as well as create a new GitHub release.
The Android App will be built and uploaded to the Google Play Store in the Internal Testing track.

## Publish the package in the Google Play Store to other tracks

Log into the console and promote the version from the Internal Testing track.
