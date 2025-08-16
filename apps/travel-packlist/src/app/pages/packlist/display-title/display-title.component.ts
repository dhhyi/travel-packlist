import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-display-title',
  templateUrl: './display-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayTitleComponent {
  private state = inject(GLOBAL_STATE);

  readonly title = computed(() => this.state.rules.parsed.value().title);
  readonly sessionName = this.state.packlist.sessionName;
}
