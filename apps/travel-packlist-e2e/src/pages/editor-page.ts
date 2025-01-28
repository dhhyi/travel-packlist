import { RuleModes } from '@travel-packlist/state';

import { Banner } from './banner';
import { ConfigPage } from './config-page';
import { PacklistPage } from './packlist-page';
import { RulesRawPage } from './rules-raw-page';

export class EditorPage extends Banner {
  get toolbar() {
    const toolbar = this.page.getByRole('toolbar');
    const fn = function () {
      return toolbar;
    };
    fn.mode = (mode: RuleModes) => {
      return this.page.getByRole('radio', {
        name: new RegExp(mode.replace(/[^a-z]/g, '.*'), 'i'),
      });
    };
    fn.searchBox = () => {
      return toolbar.locator(this.page.getByRole('searchbox'));
    };
    fn.clearSearchButton = () => {
      return toolbar.locator(
        this.page.getByRole('button', { name: 'clear search' }),
      );
    };
    fn.clipboard = () => {
      return this.page
        .getByRole('status')
        .and(this.page.getByLabel('clipboard'));
    };
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
    return {
      get: rule,
      condition: {
        get: rule.locator(this.page.getByRole('group', { name: 'condition' })),
        variable: (num: number) =>
          rule
            .locator(this.page.getByRole('combobox', { name: 'variable' }))
            .nth(num - 1),
        noErrors: new Promise<boolean>((resolve) => {
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
        }),
      },
      question: (num: number) => {
        const question = rule.locator(
          this.page.getByRole('group', { name: 'question' }).nth(num - 1),
        );
        const errors = question.locator(this.page.getByRole('alert'));
        return {
          get: question,
          variable: question.locator(
            this.page.getByRole('textbox', { name: 'variable' }),
          ),
          question: question.locator(
            this.page.getByRole('textbox', { name: 'question' }),
          ),
          deleteButton: rule
            .locator(this.page.getByRole('button', { name: 'delete question' }))
            .nth(num - 1),
          moveDownButton: rule
            .locator(
              this.page.getByRole('button', { name: 'move question down' }),
            )
            .nth(num - 1),
          moveUpButton: rule
            .locator(
              this.page.getByRole('button', { name: 'move question up' }),
            )
            .nth(num - 2),
          cutButton: rule
            .locator(this.page.getByRole('button', { name: 'cut question' }))
            .nth(num - 1),
          errors,
          noErrors: new Promise<boolean>((resolve) => {
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
          }),
        };
      },
      item: (num: number) => {
        const item = rule
          .locator(this.page.getByRole('group', { name: 'item' }))
          .nth(num - 1);
        const errors = item.locator(this.page.getByRole('alert'));
        return {
          get: item,
          category: item.locator(
            this.page.getByRole('combobox', { name: 'category' }),
          ),
          itemName: item.locator(
            this.page.getByRole('textbox', { name: 'item name' }),
          ),
          deleteButton: rule
            .locator(this.page.getByRole('button', { name: 'delete item' }))
            .nth(num - 1),
          moveDownButton: rule
            .locator(this.page.getByRole('button', { name: 'move item down' }))
            .nth(num - 1),
          moveUpButton: rule
            .locator(this.page.getByRole('button', { name: 'move item up' }))
            .nth(num - 2),
          cutButton: rule
            .locator(this.page.getByRole('button', { name: 'cut item' }))
            .nth(num - 1),
          errors,
          noErrors: new Promise<boolean>((resolve) => {
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
          }),
        };
      },
      addQuestionButton: rule.locator(
        this.page.getByRole('button', { name: 'add question' }),
      ),
      addItemButton: rule.locator(
        this.page.getByRole('button', { name: 'add item' }),
      ),
      deleteButton: rule.locator(
        this.page.getByRole('button', { name: 'delete rule' }),
      ),
      pasteButton: rule.locator(
        this.page.getByRole('button', { name: 'paste from clipboard' }),
      ),
    };
  }

  async toPacklistPage() {
    await this.banner().click();
    return new PacklistPage(this.page);
  }

  async toConfigPage() {
    await this.configLink().click();
    return new ConfigPage(this.page);
  }
}
