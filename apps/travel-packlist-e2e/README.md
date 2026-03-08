# End-to-end Testing

E2E tests are using [Playwright](https://playwright.dev/).
The tests are written in TypeScript and are located in the `src` directory.

The tests use the recommended [Page Object Model](https://playwright.dev/docs/pom) pattern.

The tests also utilize [ARIA Snapshot Testing](https://playwright.dev/docs/aria-snapshots) quite a bit, to ensure that the app is accessible.

On top of that the tests also use [Visual Comparisons](https://playwright.dev/docs/test-snapshots) to ensure that the app looks as expected.
As these visual comparisons heavily depend on the environment, it is best to run them in the provided Devcontainer.
