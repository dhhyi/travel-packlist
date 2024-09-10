import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { RulesPersistence } from './rules.persistence';
import { Rule } from '../../model/types';
import { parseRules } from '../../model/parser';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css',
})
export class RulesComponent {
  persistence = inject(RulesPersistence);

  rules = new FormControl('');
  state = signal<'success' | 'pending' | string>('pending');
  parsedRules = signal<Rule[]>([]);
  noOfRules = computed<number>(() => this.parsedRules().length);

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
