import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { RulesPersistence } from './rules.persistence';
import { parseRules } from '../../model/parser';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
  persistence = inject(RulesPersistence);

  rules = new FormControl('');
  error = signal<string | undefined>(undefined);
  noOfRules = signal<number>(0);

  constructor() {
    this.rules.valueChanges.pipe(
      tap(() => {
        this.error.set(undefined);
        this.noOfRules.set(0);
      }),
      debounceTime(500),
      takeUntilDestroyed()
    ).subscribe(
      {
        complete: () => {
          this.persistence.saveRules(this.rules.value);
        },
        next: (value) => {
          this.persistence.saveRules(value);

          if (value) {
            try {
              const parsed = parseRules(value);
              this.error.set(undefined);
              this.noOfRules.set(parsed.length);
            } catch (error) {
              if (error instanceof Error) {
                this.error.set(error.message);
              } else {
                console.error(error);
              }
            }
          }
        }
      });

    this.rules.setValue(this.persistence.getRules());
  }
}
