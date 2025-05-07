import { expect, test } from '@playwright/test';

import { startWithRules } from './pages';

test('rule editor - empty', async ({ page }) => {
  const packlist = await startWithRules(page, '');

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await expect(editor.toolbar()).toMatchAriaSnapshot(`
    - toolbar:
      - radiogroup "Editor Mode":
        - radio "View" [checked]
        - radio "Edit"
        - radio "Delete" [disabled]
        - radio "Cut/Paste" [disabled]
        - radio "Swap" [disabled]
        - radio "Search"
  `);

  await expect(page).toHaveScreenshot();
});

test('rule editor - view', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    'NOT rainy :- Will it be sunny? $sunny, [tool] umbrella',
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await expect(editor.toolbar()).toMatchAriaSnapshot(`
    - toolbar:
      - radiogroup "Editor Mode":
        - radio "View" [checked]
        - radio "Edit"
        - radio "Delete"
        - radio "Cut/Paste" [disabled]
        - radio "Swap"
        - radio "Search"
  `);

  await expect(editor.rule(1).condition()).toMatchAriaSnapshot(`
    - group "condition": IF NOT rainy
  `);
  await expect(editor.rule(1).question(1)()).toMatchAriaSnapshot(`
    - group "question":
      - textbox "question" [disabled]: Will it be sunny?
      - textbox "variable" [disabled]: sunny
  `);
  await expect(editor.rule(1).item(1)()).toMatchAriaSnapshot(`
    - group "item":
      - combobox "category" [disabled]:
        - option "tool" [selected]
        - option "+"
      - textbox "item name" [disabled]: umbrella
  `);
  await expect(page).toHaveScreenshot();
});

test('rule editor - view with title', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    `# My Rules
    :- [utility] sunscreen, [tool] umbrella;`,
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await expect(editor.rulesTitle()).toMatchAriaSnapshot(`
    - textbox "Rules Title" [disabled]: "My Rules"
  `);
  await expect(page).toHaveScreenshot();
});

test('rule editor - edit', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    'NOT rainy :- Will it be sunny? $sunny, [tool] umbrella; :- Will it be rainy? $rainy;',
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await editor.toolbar.mode('edit').click();

  await expect(editor.toolbar()).toMatchAriaSnapshot(`
    - toolbar:
      - radiogroup "Editor Mode":
        - radio "View"
        - radio "Edit" [checked]
        - radio "Delete"
        - radio "Cut/Paste"
        - radio "Swap"
        - radio "Search"
  `);

  await expect(editor.rule(1).condition()).toMatchAriaSnapshot(`
    - group "condition":
      - text: IF NOT
      - combobox:
        - option "please_select" [disabled]
        - option "always"
        - option "rainy" [selected]
        - option "NOT rainy"
        - option "rainy AND x"
        - option "rainy OR x"
        - option "REMOVE"
      - button "reset condition"
  `);
  await expect(editor.rule(1).question(1)()).toMatchAriaSnapshot(`
    - group "question":
      - textbox "question": Will it be sunny?
      - textbox "variable": sunny
  `);
  await expect(editor.rule(1).item(1)()).toMatchAriaSnapshot(`
    - group "item":
      - combobox "category":
        - option "tool" [selected]
        - option "+"
      - textbox "item name": umbrella
  `);
  await expect(page).toHaveScreenshot();
});

test('rule editor - edit with title', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    `# My Rules
    :- [utility] sunscreen, [tool] umbrella;`,
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await expect(editor.rulesTitle()).toMatchAriaSnapshot(`
    - textbox "Rules Title" [disabled]: "My Rules"
  `);

  await editor.toolbar.mode('edit').click();

  await expect(editor.rulesTitle()).toBeEditable();

  await editor.rulesTitle().fill('My New Rules');

  await expect(editor.rulesTitle()).toMatchAriaSnapshot(`
    - textbox "Rules Title": "My New Rules"
  `);
  await expect(page).toHaveScreenshot();
});

test('rule editor - delete', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    'NOT rainy :- Will it be sunny? $sunny, [tool] umbrella;',
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await editor.toolbar.mode('delete').click();

  await expect(editor.toolbar()).toMatchAriaSnapshot(`
    - toolbar:
      - radiogroup "Editor Mode":
        - radio "View"
        - radio "Edit"
        - radio "Delete" [checked]
        - radio "Cut/Paste" [disabled]
        - radio "Swap"
        - radio "Search"
  `);

  await expect(editor.rule(1)()).toMatchAriaSnapshot(`
    - 'group "Rule #1"':
      - group "condition": IF NOT rainy
      - group "question":
        - textbox "question" [disabled]: Will it be sunny?
        - textbox "variable" [disabled]: sunny
      - button "delete question"
      - group "item":
        - combobox "category" [disabled]:
          - option "tool" [selected]
          - option "+"
        - textbox "item name" [disabled]: umbrella
      - button "delete item"
      - button "delete rule"
  `);

  await editor.rule(1).question(1).deleteButton().click();

  await expect(editor.rule(1)()).toMatchAriaSnapshot(`
    - 'group "Rule #1"':
      - group "condition": IF NOT rainy
      - group "item":
        - combobox "category" [disabled]:
          - option "tool" [selected]
          - option "+"
        - textbox "item name" [disabled]: umbrella
      - button "delete item"
      - button "delete rule"
  `);

  await editor.rule(1).item(1).deleteButton().click();

  await expect(editor.rule(1)()).toMatchAriaSnapshot(`
    - 'group "Rule #1"':
      - group "condition": IF NOT rainy
      - button "delete rule"
  `);
  await expect(page).toHaveScreenshot();

  await editor.rule(1).deleteButton().click();

  await expect(editor.dialog()).toBeVisible();

  await editor.dialog.confirm().click();

  await expect(editor.rule(1)()).toBeHidden();
  await expect(page).toHaveScreenshot();
});

test('rule editor - cut-paste', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    'NOT rainy :- Will it be sunny? $sunny, [tool] umbrella; NOT sunny :- Will it be rainy? $rainy;',
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await editor.toolbar.mode('cut-paste').click();

  await expect(editor.toolbar()).toMatchAriaSnapshot(`
    - toolbar:
      - radiogroup "Editor Mode":
        - radio "View"
        - radio "Edit"
        - radio "Delete"
        - radio "Cut/Paste" [checked]
        - radio "Swap"
        - radio "Search"
  `);

  await expect(editor.rule(1)()).toMatchAriaSnapshot(`
    - 'group "Rule #1"':
      - group "condition": IF NOT rainy
      - group "question":
        - textbox "question" [disabled]: Will it be sunny?
        - textbox "variable" [disabled]: sunny
      - button "cut question"
      - group "item":
        - combobox "category" [disabled]:
          - option "tool" [selected]
          - option "+"
        - textbox "item name" [disabled]: umbrella
      - button "cut item"
      - button "paste from clipboard"
  `);

  await editor.rule(1).question(1).cutButton().click();
  await editor.rule(1).item(1).cutButton().click();

  await expect(editor.rule(1)()).toMatchAriaSnapshot(`
    - 'group "Rule #1"':
      - group "condition": IF NOT rainy
      - button "paste from clipboard"
  `);

  await expect(editor.toolbar.clipboard()).toHaveText(
    'Clipboard: 1 Item and 1 Question',
  );
  await expect(page).toHaveScreenshot();

  await editor.rule(2).pasteButton().click();

  await expect(editor.rule(2)()).toMatchAriaSnapshot(`
    - 'group "Rule #2"':
      - group "condition": IF NOT sunny
      - group "question":
        - textbox "question" [disabled]: Will it be rainy?
        - textbox "variable" [disabled]
      - button "cut question"
      - group "question":
        - textbox "question" [disabled]: Will it be sunny?
        - textbox "variable" [disabled]
      - button "cut question"
      - group "item":
        - combobox "category" [disabled]:
          - option "tool" [selected]
          - option "+"
        - textbox "item name" [disabled]
      - button "cut item"
      - button "paste from clipboard"
  `);

  await expect(editor.toolbar.clipboard()).toBeHidden();
  await expect(page).toHaveScreenshot();
});

test('rule editor - swap', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    ':- Will it be sunny? $sunny, Will it be rainy? $rainy, [tool] umbrella, [tool] boots;',
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await editor.toolbar.mode('swap').click();

  await expect(editor.toolbar()).toMatchAriaSnapshot(`
    - toolbar:
      - radiogroup "Editor Mode":
        - radio "View"
        - radio "Edit"
        - radio "Delete"
        - radio "Cut/Paste" [disabled]
        - radio "Swap" [checked]
        - radio "Search"
  `);
  await expect(page).toHaveScreenshot();

  await expect(editor.rule(1)()).toMatchAriaSnapshot(`
    - 'group "Rule #1"':
      - group "condition": IF always
      - button "move question down"
      - group "question":
        - textbox "question" [disabled]: Will it be sunny?
        - textbox "variable" [disabled]: sunny
      - group "question":
        - textbox "question" [disabled]: Will it be rainy?
        - textbox "variable" [disabled]: rainy
      - button "move question up"
      - button "move item down"
      - group "item":
        - combobox "category" [disabled]:
          - option "tool" [selected]
          - option "+"
        - textbox "item name" [disabled]: umbrella
      - group "item":
        - combobox "category" [disabled]:
          - option "tool" [selected]
          - option "+"
        - textbox "item name" [disabled]: boots
      - button "move item up"
  `);

  await editor.rule(1).question(1).moveDownButton().click();

  await expect(editor.rule(1).question(1).question()).toHaveValue(
    'Will it be rainy?',
  );
  await expect(editor.rule(1).question(2).question()).toHaveValue(
    'Will it be sunny?',
  );

  await editor.rule(1).item(2).moveUpButton().click();

  await expect(editor.rule(1).item(1).itemName()).toHaveValue('boots');
  await expect(editor.rule(1).item(2).itemName()).toHaveValue('umbrella');
  await expect(page).toHaveScreenshot();
});

test('rule editor - search', async ({ page }) => {
  const packlist = await startWithRules(
    page,
    ':- Will it be sunny? $sunny, Will it be rainy? $rainy, [tool] umbrella, [tool] boots;',
  );

  const editor = await packlist
    .toConfigPage()
    .then((page) => page.toEditorPage());

  await editor.toolbar.mode('search').click();

  await expect(editor.toolbar()).toMatchAriaSnapshot(`
    - toolbar:
      - radiogroup "Editor Mode":
        - radio "View"
        - radio "Edit"
        - radio "Delete"
        - radio "Cut/Paste" [disabled]
        - radio "Swap"
        - radio "Search" [checked]
      - searchbox "search in rules"
      - button "clear search"
  `);
  await expect(page).toHaveScreenshot();

  await editor.toolbar.searchBox().fill('sunscreen');

  await expect(editor.rule(1)()).toBeHidden();
  await expect(page).toHaveScreenshot();

  await editor.toolbar.clearSearchButton().click();

  await expect(editor.rule(1)()).toBeVisible();

  await editor.toolbar.searchBox().fill('tent');

  await expect(editor.rule(1)()).toBeHidden();

  await editor.toolbar.searchBox().fill('umbrella');

  await expect(editor.rule(1)()).toBeVisible();
  await expect(page).toHaveScreenshot();
});
