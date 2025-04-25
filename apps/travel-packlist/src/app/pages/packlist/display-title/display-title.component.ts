import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-title',
  templateUrl: './display-title.component.html',
})
export class DisplayTitleComponent {
  private state = inject(GLOBAL_STATE);

  readonly title = computed(() => this.state.rules.parsed.value().title);
}
