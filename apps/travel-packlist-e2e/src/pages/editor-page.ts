import { expect } from '@playwright/test';
import { RuleModes } from '@travel-packlist/state';

import { Banner } from './banner';
import { ConfigPage } from './config-page';
import { PacklistPage } from './packlist-page';
import { RulesRawPage } from './rules-raw-page';

export class EditorPage extends Banner {
  private readonly identifier = this.page.locator('app-rules');

  get toolbar() {
    const toolbar = this.page.getByRole('toolbar');
    const fn = function () {
      return toolbar;
    };
    fn.mode = (mode: RuleModes) =>
      this.page.getByRole('radio', {
        name: new RegExp(mode.replace(/[^a-z]/g, '.*'), 'i'),
      });
    fn.searchBox = () => toolbar.locator(this.page.getByRole('searchbox'));
    fn.clearSearchButton = () =>
      toolbar.locator(this.page.getByRole('button', { name: 'clear search' }));
    fn.clipboard = () =>
      this.page.getByRole('status').and(this.page.getByLabel('clipboard'));
    return fn;
  }

  get error() {
    const error = this.page.getByRole('alert');
    const fn = function () {
      return error;
    };
    fn.goToRulesRaw = async () => {
      await error
        .locator(
          this.page
            .getByRole('button')
            .and(this.page.getByLabel('fix error in raw editor')),
        )
        .click();
      return new RulesRawPage(this.page);
    };
    return fn;
  }

  addRuleButton = this.page.getByRole('button', { name: 'add rule' });

  rule(num: number) {
    const rule = this.page.getByRole('group', {
      name: `Rule #${num.toString()}`,
      exact: true,
    });
    const condition = rule.locator(
      this.page.getByRole('group', { name: 'condition' }),
    );
    const ruleFn = function () {
      return rule;
    };
    ruleFn.addQuestionButton = () =>
      rule.locator(this.page.getByRole('button', { name: 'add question' }));
    ruleFn.addItemButton = () =>
      rule.locator(this.page.getByRole('button', { name: 'add item' }));
    ruleFn.deleteButton = () =>
      rule.locator(this.page.getByRole('button', { name: 'delete rule' }));
    ruleFn.pasteButton = () =>
      rule.locator(
        this.page.getByRole('button', { name: 'paste from clipboard' }),
      );
    const ruleConditionFn = function () {
      return condition;
    };
    ruleConditionFn.variable = (num: number) =>
      rule
        .locator(this.page.getByRole('combobox', { name: 'variable' }))
        .nth(num - 1);
    ruleConditionFn.noErrors = () =>
      new Promise<boolean>((resolve) => {
        setTimeout(() => {
          rule
            .locator(this.page.getByRole('alert'))
            .waitFor({ state: 'hidden' })
            .then(() => {
              resolve(true);
            })
            .catch(() => {
              resolve(false);
            });
        }, 100);
      });
    ruleFn.condition = ruleConditionFn;
    ruleFn.question = (num: number) => {
      const question = rule.locator(
        this.page.getByRole('group', { name: 'question' }).nth(num - 1),
      );
      const errors = question.locator(this.page.getByRole('alert'));
      const fn = function () {
        return question;
      };
      fn.variable = () =>
        question.locator(this.page.getByRole('textbox', { name: 'variable' }));
      fn.question = () =>
        question.locator(this.page.getByRole('textbox', { name: 'question' }));
      fn.deleteButton = () =>
        rule
          .locator(this.page.getByRole('button', { name: 'delete question' }))
          .nth(num - 1);
      fn.moveDownButton = () =>
        rule
          .locator(
            this.page.getByRole('button', { name: 'move question down' }),
          )
          .nth(num - 1);
      fn.moveUpButton = () =>
        rule
          .locator(this.page.getByRole('button', { name: 'move question up' }))
          .nth(num - 2);
      fn.cutButton = () =>
        rule
          .locator(this.page.getByRole('button', { name: 'cut question' }))
          .nth(num - 1);
      fn.errors = () => errors;
      fn.noErrors = () =>
        new Promise<boolean>((resolve) => {
          setTimeout(() => {
            errors
              .waitFor({ state: 'hidden' })
              .then(() => {
                resolve(true);
              })
              .catch(() => {
                resolve(false);
              });
          }, 100);
        });
      return fn;
    };
    ruleFn.item = (num: number) => {
      const item = rule
        .locator(this.page.getByRole('group', { name: 'item' }))
        .nth(num - 1);
      const errors = item.locator(this.page.getByRole('alert'));
      const fn = function () {
        return item;
      };
      fn.category = () =>
        item.locator(this.page.getByRole('combobox', { name: 'category' }));
      fn.itemName = () =>
        item.locator(this.page.getByRole('textbox', { name: 'item name' }));
      fn.deleteButton = () =>
        rule
          .locator(this.page.getByRole('button', { name: 'delete item' }))
          .nth(num - 1);
      fn.moveDownButton = () =>
        rule
          .locator(this.page.getByRole('button', { name: 'move item down' }))
          .nth(num - 1);
      fn.moveUpButton = () =>
        rule
          .locator(this.page.getByRole('button', { name: 'move item up' }))
          .nth(num - 2);
      fn.cutButton = () =>
        rule
          .locator(this.page.getByRole('button', { name: 'cut item' }))
          .nth(num - 1);
      fn.errors = () => errors;
      fn.noErrors = () =>
        new Promise<boolean>((resolve) => {
          setTimeout(() => {
            errors
              .waitFor({ state: 'hidden' })
              .then(() => {
                resolve(true);
              })
              .catch(() => {
                resolve(false);
              });
          }, 100);
        });
      return fn;
    };
    return ruleFn;
  }

  async toPacklistPage() {
    await this.banner().click();
    await expect(this.identifier).toBeHidden();
    return new PacklistPage(this.page);
  }

  async toConfigPage() {
    await this.configLink().click();
    await expect(this.identifier).toBeHidden();
    return new ConfigPage(this.page);
  }
}
