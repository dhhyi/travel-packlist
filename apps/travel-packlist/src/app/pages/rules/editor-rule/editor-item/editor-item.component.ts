import {
  Component,
  inject,
  input,
  output,
  ChangeDetectionStrategy,
  effect,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  SyntaxError,
  Parser,
  Item,
  serializeWeight,
} from '@travel-packlist/model';
import { GlobalState } from '@travel-packlist/state';
import { debounceTime, filter } from 'rxjs';

import { alert, prompt } from '../../../../dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-item',
  imports: [ReactiveFormsModule],
  templateUrl: './editor-item.component.html',
})
export class EditorItemComponent {
  readonly item = input.required<Item>();

  private state = inject(GlobalState);
  mode = this.state.signal('rulesMode');
  categories = this.state.signal('categories');

  readonly itemChanged = output<Item>();

  private fb = inject(FormBuilder).nonNullable;
  form = this.fb.group({
    category: this.fb.control(''),
    name: this.fb.control('', {
      validators: [this.validateNamePattern(), Validators.required.bind(this)],
    }),
  });

  private parser = inject(Parser);

  constructor() {
    effect(() => {
      this.item();
      this.reset();
    });

    const validFormUpdates = toSignal(
      this.form.valueChanges.pipe(
        debounceTime(500),
        filter(() => this.form.valid),
      ),
    );

    effect(() => {
      const value = validFormUpdates();
      if (!value?.name) {
        return;
      }
      if (!value.category) {
        void this.addNewCategory();
        return;
      }

      const serialized = new Item(value.category, value.name).toString();
      this.itemChanged.emit(this.parser.parseItem(serialized));
    });

    effect(() => {
      if (this.mode() === 'edit') {
        this.form.enable({ emitEvent: false });
      } else {
        this.form.disable({ emitEvent: false });
      }
      this.reset();
    });
  }

  blockPatch = false;

  reset() {
    if (!this.blockPatch) {
      let name = this.item().name;
      if (this.item().weight) {
        name += ` ${serializeWeight(this.item().weight)}`;
      }

      this.form.patchValue(
        {
          category: this.item().category,
          name,
        },
        { emitEvent: false },
      );
    }
  }

  focus(event: FocusEvent) {
    this.blockPatch = document.activeElement === event.target;
    if (this.form.controls.name.value === Item.NEW_ITEM_NAME) {
      this.form.controls.name.setValue('', { emitEvent: false });
    }
  }

  blur() {
    this.blockPatch = false;
    this.reset();
  }

  private async addNewCategory(prefill = '') {
    const newCategory = await prompt('Enter new category name', prefill);
    if (newCategory) {
      try {
        this.parser.validateCategoryName(newCategory);
        this.form.patchValue({ category: newCategory });
      } catch (error) {
        if (error instanceof SyntaxError) {
          const pattern = error.found;
          await alert(
            $localize`:@@edit.item.category.invalid-character:Category name cannot contain '${pattern}:INTERPOLATION:'` as string,
          );
        } else {
          console.error(error);
          await alert(
            $localize`:@@edit.item.category.invalid:Invalid category name` as string,
          );
        }
        void this.addNewCategory(newCategory);
      }
    } else {
      this.reset();
    }
  }

  private validateNamePattern(): ValidatorFn {
    return (control: AbstractControl<string | null>) => {
      const value = control.value?.trim() ?? '';
      try {
        this.parser.validateItemNameAndWeight(value);
        return null;
      } catch (error) {
        control.markAsTouched();
        if (error instanceof SyntaxError) {
          return { pattern: error.found };
        }
        return { pattern: true };
      }
    };
  }
}
