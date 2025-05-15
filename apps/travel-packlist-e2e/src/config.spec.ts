import { expect, test } from '@playwright/test';

import { start } from './pages';

test('config', async ({ page }) => {
  const config = await start(page).then((page) => page.toConfigPage());

  await config.animations().check();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation:
      - banner "Go to TravelPacklist":
        - heading "TravelPacklist" [level=1]
    - heading "Checklist" [level=2]
    - button "Reset Checklist"
    - checkbox "Track item weight. (You can enter the item weight appended to the item name in the editor.)"
    - checkbox "Allow skipping items. (You can skip items in the packlist by double clicking them.)"
    - radiogroup "Sort categories":
      - radio "alphabetically" [checked]
      - radio "order of definition"
    - heading "Rules Mode" [level=2]
    - radiogroup:
      - radio "local"
      - radio "remote"
      - radio "template"
    - heading "Appearance" [level=2]
    - radiogroup "Language":
      - radio "auto" [checked]
      - radio "English"
      - radio "German"
    - radiogroup "Theme":
      - radio "Dark"
      - radio "Light"
      - radio "System" [checked]
    - radiogroup "Font Size":
      - radio "small"
      - radio "normal" [checked]
      - radio "large"
    - radiogroup "Accessibility":
      - radio "accessible" [checked]
      - radio "compact"
    - checkbox "Animations" [checked]
    - heading "App Version" [level=2]
    - link /Current version is .+/
    - text: /built on .+/
    - link /Current git hash starts with [0-9a-f]{8}/
    - text: /Service Worker. .+/
    - heading "Support" [level=2]
    - paragraph:
      - text: "If you find any bugs or have any suggestions, please open an issue on GitHub:"
      - link "open an issue on GitHub"
    - paragraph:
      - text: Alternatively, you can reach out to me by
      - link "email to danilo.hoffmann1@googlemail.com"
    - paragraph:
      - text: If you like this app, please consider to
      - link "Buy Me a Coffee at ko-fi.com"
    - heading "DANGER!" [level=2]
    - button "Reset Application"
  `);

  await expect(page).toHaveScreenshot({ fullPage: true, threshold: 0.01 });
});

test('config - no accessibility', async ({ page }) => {
  const config = await start(page).then((page) => page.toConfigPage());

  await config.accessibility.compact().check();
  await config.animations().check();

  await expect(page).toHaveScreenshot({ fullPage: true, threshold: 0.01 });
});
