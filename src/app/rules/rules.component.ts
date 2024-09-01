import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { loadRules, saveRules } from './rules.persistence';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
  rules = new FormControl('');

  constructor() {
    this.rules.setValue(loadRules());

    this.rules.valueChanges.pipe(debounceTime(500), takeUntilDestroyed()).subscribe(
      {
        complete: () => {
          saveRules(this.rules.value);
        },
        next: (value) => {
          saveRules(value);
        }
      });
  }
}
