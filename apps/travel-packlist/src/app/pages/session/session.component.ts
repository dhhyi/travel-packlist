import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { IconDeleteComponent } from '@travel-packlist/icons';
import { GLOBAL_STATE, SavedSession } from '@travel-packlist/state';

import { confirm, prompt } from '../../dialog';

@Component({
  selector: 'app-session',
  imports: [CommonModule, IconDeleteComponent],
  templateUrl: './session.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-full w-full gap-y-4 *:min-h-[100px]',
  },
})
export class SessionComponent {
  readonly type = input.required<'new' | 'restore'>();

  private state = inject(GLOBAL_STATE);

  readonly savedSessions = this.state.packlist.sessions;

  slotLabel(session: SavedSession | undefined, index: number) {
    if (!session) {
      return $localize`Empty slot ${index + 1}:SLOT_NUMBER:`;
    }
    const date = new Date(session.modifiedAt);
    if (this.type() === 'restore') {
      return $localize`Load session "${session.sessionName}:SESSION_NAME:" from ${date.toLocaleString()}:DATE_TIME:`;
    } else if (this.type() === 'new') {
      return $localize`Overwrite session "${session.sessionName}:SESSION_NAME:" from ${date.toLocaleString()}:DATE_TIME:`;
    } else {
      return `Unknown session type: ${this.type()}`;
    }
  }

  async clickSlot(session: SavedSession | undefined, index: number) {
    if (this.type() === 'restore') {
      if (session) {
        this.state.packlist.currentSlot.set(index);
        this.state.router.go('packlist');
      }
    } else if (this.type() === 'new') {
      if (
        !session ||
        (await confirm(
          $localize`Are you sure you want to overwrite the session "${session.sessionName}:SESSION_NAME:"?`,
        ))
      ) {
        this.state.packlist.copySessionToSlot(index);
        this.state.packlist.currentSlot.set(index);

        const name = await prompt(
          $localize`Give a name to this session:`,
          session?.sessionName ?? undefined,
        );
        if (name) {
          this.state.packlist.setSessionName(name);
        }

        this.state.router.go('packlist');
      }
    }
  }

  async clearSlot(session: SavedSession, index: number) {
    if (
      await confirm(
        $localize`Are you sure you want to delete the session "${session.sessionName}:SESSION_NAME:"?`,
      )
    ) {
      this.state.packlist.clearSlot(index);
    }
  }
}
