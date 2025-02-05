# End-to-end Testing

E2E tests are using [Playwright](https://playwright.dev/).
The tests are written in TypeScript and are located in the `src` directory.

The tests use the recommended [Page Object Model](https://playwright.dev/docs/pom) pattern.

The tests also utilize [ARIA Snapshot Testing](https://playwright.dev/docs/aria-snapshots) quite a bit, to ensure that the app is accessible.

On top of that the tests also use [Visual Comparisons](https://playwright.dev/docs/test-snapshots) to ensure that the app looks as expected.
As these visual comparisons heavily depend on the environment, it is best to run them in the provided Docker Container.

However, it looks like the devcontainer provides the same environment as the CI which uses the Docker Container.

When the visual comparisons fail locally, run the tests in the Docker Container with the following commands:

```bash
# Build the Docker Container
docker build -f apps/travel-packlist-e2e/Dockerfile . -t test-e2e
# Run the E2E task
docker run -v $PWD/apps/travel-packlist-e2e:/ws/apps/travel-packlist-e2e test-e2e travel-packlist-e2e:e2e

# Update the snapshots
docker run -v $PWD/apps/travel-packlist-e2e:/ws/apps/travel-packlist-e2e test-e2e travel-packlist-e2e:update-snapshots
```
