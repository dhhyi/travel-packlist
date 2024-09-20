import { Component, inject, input, OnChanges, output } from '@angular/core';
import { Item } from '../../../model/types';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RulesMode } from '../rules.mode';
import { Parser } from '../../../model/parser';
import { Serializer } from '../../../model/serializer';
import { EditorRuleComponent } from '../editor-rule/editor-rule.component';

@Component({
  selector: 'app-editor-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor-item.component.html',
})
export class EditorItemComponent implements OnChanges {
  item = input.required<Item>();
  categories = input.required<string[]>();

  itemChanged = output<Item>();

  control = new FormGroup<{ [K in keyof Item]: FormControl<string | null> }>({
    category: new FormControl(''),
    name: new FormControl('', [
      Validators.pattern('[^,;#]+'),
      Validators.required,
    ]),
  });

  getControl(name: keyof Item) {
    return this.control.get(name) as FormControl<string>;
  }

  mode = inject(RulesMode);

  private parser = inject(Parser);

  private serializer = inject(Serializer);

  constructor() {
    this.control.valueChanges
      .pipe(
        tap(() => {
          this.control.markAllAsTouched();
        }),
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

    this.mode
      .asObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((mode) => {
        if (mode === 'edit') {
          this.control.enable({ emitEvent: false });
        } else {
          this.control.disable({ emitEvent: false });
        }
        this.ngOnChanges();
      });
  }

  blockPatch = false;

  ngOnChanges() {
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
    this.ngOnChanges();
  }

  private addNewCategory() {
    console.log('add new category');

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
