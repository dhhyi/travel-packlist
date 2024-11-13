import {
  Component,
  inject,
  input,
  OnChanges,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Item } from '../../../model/types';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Parser } from '../../../model/parser';
import { Serializer } from '../../../model/serializer';
import { EditorRuleComponent } from '../editor-rule/editor-rule.component';
import { GlobalState } from '../../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor-item.component.html',
})
export class EditorItemComponent implements OnChanges {
  item = input.required<Item>();

  private state = inject(GlobalState);
  mode = this.state.signal('rulesMode');
  categories = this.state.signal('categories');

  readonly itemChanged = output<Item>();

  control = new FormGroup<{ [K in keyof Item]: FormControl<string | null> }>({
    category: new FormControl(''),
    name: new FormControl('', [
      Validators.pattern('[^,;#]+'),
      // eslint-disable-next-line @typescript-eslint/unbound-method
      Validators.required,
    ]),
  });

  getControl(name: keyof Item) {
    return this.control.get(name) as FormControl<string>;
  }

  private parser = inject(Parser);
  private serializer = inject(Serializer);

  constructor() {
    this.control.valueChanges
      .pipe(
        debounceTime(500),
        filter(() => this.control.valid),
        takeUntilDestroyed(),
      )
      .subscribe((value) => {
        if (!value.category) {
          this.addNewCategory();
          return;
        }

        const [name, weight] = this.parser.extractItemNameAndWeight(value.name);

        this.itemChanged.emit(new Item(value.category, name, weight));
      });

    toObservable(this.mode)
      .pipe(takeUntilDestroyed())
      .subscribe((mode) => {
        if (mode === 'edit') {
          this.control.enable({ emitEvent: false });
        } else {
          this.control.disable({ emitEvent: false });
        }
        this.reset();
      });
  }

  blockPatch = false;

  ngOnChanges() {
    this.reset();
  }

  reset() {
    if (!this.blockPatch) {
      let name = this.item().name;
      if (this.item().weight) {
        name += ` ${this.serializer.serializeWeight(this.item().weight)}`;
      }

      this.control.patchValue(
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
    if (this.getControl('name').value === EditorRuleComponent.NEW_ITEM_NAME) {
      this.getControl('name').setValue('', { emitEvent: false });
    }
  }

  blur() {
    this.blockPatch = false;
    this.reset();
  }

  private addNewCategory() {
    const newCategory = window.prompt('Enter new category name');
    if (newCategory) {
      if (/[,;#]/.test(newCategory)) {
        alert('Category name cannot contain , ; #');
        this.control.patchValue({ category: '' });
        return;
      }

      this.control.patchValue({ category: newCategory });
    }
  }
}
