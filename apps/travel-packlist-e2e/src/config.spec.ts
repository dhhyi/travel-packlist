import { expect, test } from '@playwright/test';

import { start } from './pages';

test('config', async ({ page }) => {
  const config = await start(page).then((page) => page.toConfigPage());

  await config.animations().click();

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation:
      - banner "Go to TravelPacklist":
        - heading "TravelPacklist" [level=1]
    - heading "Pack List" [level=2]
    - paragraph: No active session
    - button "Reset Pack List"
    - button "Start Session"
    - button "Restore Session"
    - checkbox "Track item weight. (You can enter the item weight appended to the item name in the editor.)"
    - checkbox /Allow skipping items. .You can skip items in the packlist by .*/
    - radiogroup "Sort categories":
      - radio "alphabetically" [checked]
      - radio "order of definition"
    - heading "Rules Mode" [level=2]
    - radiogroup "Rules Mode":
      - radio "local"
      - radio "remote"
      - radio "template" [checked]
    - heading "Rule Templates" [level=2]
    - radiogroup "Rules Template":
      - radio "Example template with some existing rules." [checked]
      - radio "Template showing logical operations."
      - radio "Example template for a multi-day backpacking trip."
      - radio "Empty template for starting your own rules."
    - button "Copy rules locally"
    - heading "Rules Viewer" [level=2]
    - button "View Rules"
    - checkbox "Fade out disabled rules"
    - checkbox "Highlight variable status"
    - button "View Rules Code"
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

  await config.accessibility.compact().click();
  await config.animations().click();

  await expect(page).toHaveScreenshot({ fullPage: true, threshold: 0.01 });
});
