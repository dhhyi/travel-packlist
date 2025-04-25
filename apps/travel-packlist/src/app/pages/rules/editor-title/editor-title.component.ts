import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  output,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-title',
  templateUrl: './editor-title.component.html',
})
export class EditorTitleComponent {
  private state = inject(GLOBAL_STATE);

  readonly isEditMode = computed(
    () => this.state.router.rulesMode() === 'edit',
  );
  readonly currentTitle = computed(() => this.state.rules.parsed.value().title);
  readonly visible = computed(() => this.isEditMode() || !!this.currentTitle());

  readonly titleChange = output<string | undefined>();

  private titleDebounce: number | undefined;

  changed(title: string | undefined) {
    // eslint-disable-next-line eqeqeq
    if (title != this.currentTitle()) {
      if (this.titleDebounce) {
        clearTimeout(this.titleDebounce);
      }
      this.titleDebounce = setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        this.titleChange.emit(title || undefined);
      }, 500);
    }
  }
}
