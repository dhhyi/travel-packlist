import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { loadRules, saveRules } from './rules.persistence';
import { parseRules } from '../../model/parser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
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
          saveRules(this.rules.value);
        },
        next: (value) => {
          saveRules(value);

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

    this.rules.setValue(loadRules());
  }
}
