import { SlicePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import {
  debounce,
  disabled,
  FieldValidator,
  form,
  FormField,
  required,
  validate,
} from '@angular/forms/signals';
import {
  Parser,
  serializeItem,
  serializeWeight,
  SyntaxError,
} from '@travel-packlist/model';
import { Item } from '@travel-packlist/rules';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { noop } from 'rxjs';

import { alert, prompt } from '../../../../dialog';

@Component({
  selector: 'app-editor-item',
  imports: [FormField, SlicePipe],
  templateUrl: './editor-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorItemComponent {
  readonly item = input.required<Item>();

  private state = inject(GLOBAL_STATE);
  mode = this.state.router.rulesMode;
  categories = this.state.rules.categories;

  readonly itemChanged = output<Item>();

  private readonly formModel = linkedSignal<Pick<Item, 'category' | 'name'>>(
    () => {
      let name = this.item().name;
      if (this.item().weight) {
        name += ` ${serializeWeight(this.item().weight)}`;
      }
      return { category: this.item().category, name };
    },
  );
  readonly form = form(this.formModel, (path) => {
    validate(path.name, this.validateNamePattern());
    required(path.name);
    disabled(path, () => this.mode() !== 'edit');
    // TODO: replace with validate on blur once API is available
    debounce(path.name, () => new Promise<void>(noop));
  });

  private parser = inject(Parser);

  constructor() {
    effect(() => {
      const model = this.formModel();
      const n = model.name.trim();
      const c = model.category.trim();
      if (!c) {
        void this.addNewCategory();
      } else if (this.form().valid()) {
        const serialized = serializeItem(new Item(c, n));
        const parsed = this.parser.parseItem(serialized);
        if (!parsed.equals(this.item())) {
          this.itemChanged.emit(parsed);
        }
      }
    });
  }

  focusName() {
    if (this.formModel().name === Item.NEW_ITEM_NAME) {
      this.formModel.update((model) => ({ ...model, name: '' }));
    }
  }

  private async addNewCategory(prefill = '') {
    const newCategory = await prompt('Enter new category name', prefill);
    if (newCategory) {
      try {
        this.parser.validateCategoryName(newCategory);
        this.formModel.update((model) => ({ ...model, category: newCategory }));
      } catch (error) {
        if (error instanceof SyntaxError) {
          const pattern = error.found;
          await alert(
            $localize`Category name cannot contain '${pattern}:INTERPOLATION:'`,
          );
        } else {
          await alert($localize`Invalid category name`);
        }
        void this.addNewCategory(newCategory);
      }
    }
  }

  private validateNamePattern(): FieldValidator<string> {
    return (ctx) => {
      const value = ctx.value().trim();
      try {
        this.parser.validateItemNameAndWeight(value);
        return null;
      } catch (error) {
        if (error instanceof SyntaxError && typeof error.found === 'string') {
          return { kind: 'pattern', message: error.found };
        }
        return { kind: 'pattern' };
      }
    };
  }
}
