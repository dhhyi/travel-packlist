import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CheckboxComponent,
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm, prompt } from '../../../dialog';

@Component({
  selector: 'app-config-packlist',
  imports: [
    FormsModule,
    CheckboxComponent,
    SelectOptionsComponent,
    SelectOptionDirective,
  ],
  templateUrl: './config-packlist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigPackListComponent {
  private state = inject(GLOBAL_STATE);

  sessionName = this.state.packlist.sessionName;
  trackWeight = this.state.config.trackWeight;
  skipItems = this.state.config.skipItems;
  categorySorting = this.state.config.categorySorting;

  readonly skipItemsHelpText = computed(() =>
    this.state.browser.isMobile()
      ? $localize`You can skip items in the packlist by long pressing them.`
      : $localize`You can skip items in the packlist by double clicking them.`,
  );

  async resetPackList() {
    if (
      await confirm($localize`Are you sure you want to reset the pack list?`)
    ) {
      this.state.packlist.reset();
      this.state.router.go('packlist');
    }
  }

  async renameSession() {
    const name = await prompt(
      this.sessionName()
        ? $localize`Rename this session:`
        : $localize`Give a name to this session:`,
      this.sessionName() ?? undefined,
    );
    if (name) {
      this.state.packlist.sessionName.set(name);
    } else if (name === '') {
      this.state.packlist.sessionName.set(undefined);
    }
  }
}
