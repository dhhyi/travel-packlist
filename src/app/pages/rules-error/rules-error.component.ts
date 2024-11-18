import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rules-error.component.html',
})
export class RulesErrorComponent {
  error = input<string>();
}