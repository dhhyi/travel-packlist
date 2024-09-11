import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { tap, debounceTime } from 'rxjs';
import { parseRules } from '../../../model/parser';
import { Rule } from '../../../model/types';
import { RulesPersistence } from '../rules.persistence';

@Component({
  selector: 'app-edit-rules-raw',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-rules-raw.component.html',
  styleUrl: './edit-rules-raw.component.css',
})
export class EditRulesRawComponent {
  rules = new FormControl('');
  state = signal<'success' | 'pending' | string>('pending');

  parsedRules = signal<Rule[]>([]);
  noOfRules = computed<number>(() => this.parsedRules().length);

  persistence = inject(RulesPersistence);

  constructor() {
    this.rules.valueChanges
      .pipe(
        tap(() => {
          this.state.set('pending');
        }),
        debounceTime(500),
        takeUntilDestroyed(),
      )
      .subscribe({
        complete: () => {
          this.persistence.saveRules(this.rules.value);
        },
        next: (value) => {
          this.persistence.saveRules(value);
          if (value) {
            try {
              const parsed = parseRules(value);
              this.parsedRules.set(parsed);
              this.state.set('success');
            } catch (error) {
              if (error instanceof Error) {
                this.state.set(error.message);
              } else {
                console.error(error);
              }
            }
          }
        },
      });
    this.rules.setValue(this.persistence.getRules());
  }
}
