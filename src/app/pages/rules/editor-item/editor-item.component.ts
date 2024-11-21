import {
  Component,
  inject,
  ChangeDetectionStrategy,
  effect,
  model,
} from '@angular/core';
import { Item } from '../../../model/types';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { Parser } from '../../../model/parser';
import { Serializer } from '../../../model/serializer';
import { GlobalState } from '../../../state/global-state';
import { prompt } from '../../../dialog';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-item',
  imports: [ReactiveFormsModule],
  templateUrl: './editor-item.component.html',
})
export class EditorItemComponent {
  item = model.required<Item>();

  private state = inject(GlobalState);
  mode = this.state.signal('rulesMode');
  categories = this.state.signal('categories');

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
      if (!value) {
        return;
      }
      if (!value.category) {
        void this.addNewCategory();
        return;
      }

      const [name, weight] = this.parser.extractItemNameAndWeight(value.name);

      this.item.set(new Item(value.category, name, weight));
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