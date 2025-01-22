import { test, expect } from '@playwright/test';

import { start } from './pages';

test('config', async ({ page }) => {
  await start(page).then((page) => page.toConfigPage());

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - navigation:
      - banner "Go to TravelPacklist":
        - heading "TravelPacklist" [level=1]
    - heading "Checklist" [level=2]
    - button "Reset Checklist"
    - checkbox "Track item weight. (You can enter the item weight appended to the item name in the editor.)"
    - radiogroup "Sort categories":
      - radio "alphabetically" [checked]
      - radio "order of definition"
    - heading "Rules Editor" [level=2]
    - button "Edit Rules"
    - checkbox "Fade out disabled rules in editor"
    - checkbox "Highlight variable status in editor"
    - checkbox "Rename all occurrences when renaming variables" [checked]
    - button "Documentation"
    - button "Edit Rules with Code"
    - button "Export Rules" [disabled]
    - button "Import Rules"
    - checkbox "Remind me to regularly export rules"
    - heading "Appearance" [level=2]
    - radiogroup "Language":
      - radio "auto" [checked]
      - radio
      - radio
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
    - text: "Service Worker: disabled"
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
});
