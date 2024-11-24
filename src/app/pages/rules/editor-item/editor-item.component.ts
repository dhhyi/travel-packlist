import {
  Component,
  inject,
  input,
  output,
  ChangeDetectionStrategy,
  effect,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

import { prompt } from '../../../dialog';
import { Parser } from '../../../model/parser';
import { Serializer } from '../../../model/serializer';
import { Item } from '../../../model/types';
import { GlobalState } from '../../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-item',
  imports: [ReactiveFormsModule],
  templateUrl: './editor-item.component.html',
})
export class EditorItemComponent {
  item = input.required<Item>();

  private state = inject(GlobalState);
  mode = this.state.signal('rulesMode');
  categories = this.state.signal('categories');

  readonly itemChanged = output<Item>();

  private fb = inject(FormBuilder).nonNullable;
  form = this.fb.group({
    category: this.fb.control(''),
    name: this.fb.control('', {
      validators: [
        Validators.pattern('[^,;#]+'),
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
      ],
    }),
  });

  private parser = inject(Parser);
  private serializer = inject(Serializer);

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

      const serialized = this.serializer.serialize(
        new Item(value.category, value.name),
      );
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
        name += ` ${this.serializer.serializeWeight(this.item().weight)}`;
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

  private async addNewCategory() {
    const newCategory = await prompt('Enter new category name');
    if (newCategory) {
      if (/[,;#]/.test(newCategory)) {
        alert('Category name cannot contain , ; #');
        this.form.patchValue({ category: '' });
        return;
      }

      this.form.patchValue({ category: newCategory });
    } else {
      this.reset();
    }
  }
}
