import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  linkedSignal,
  signal,
  viewChild,
} from '@angular/core';
import { form, FormField, readonly } from '@angular/forms/signals';
import { IconEdit } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-display-notes',
  imports: [FormField, IconEdit],
  templateUrl: './display-notes.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayNotes {
  private state = inject(GLOBAL_STATE);
  private readonly notesTextArea =
    viewChild<ElementRef<HTMLTextAreaElement>>('notes');

  readonly visible = this.state.packlist.isNotesVisible;

  protected readonly editMode = signal(false);
  private readonly notes = linkedSignal(
    () => this.state.packlist.sessionNotes() ?? '',
  );
  protected readonly control = form(this.notes, (path) => {
    readonly(path, () => !this.editMode());
  });

  private restoreHeight() {
    const notesElement = this.notesTextArea();
    if (notesElement) {
      notesElement.nativeElement.style.height = 'auto';
      notesElement.nativeElement.style.height =
        notesElement.nativeElement.scrollHeight.toFixed(0) + 'px';
    }
  }

  constructor() {
    effect(() => {
      if (this.editMode()) {
        this.state.packlist.setSessionNotes(this.notes());
        this.restoreHeight();
      }
    });

    afterNextRender(() => {
      this.restoreHeight();
    });

    effect(() => {
      if (this.editMode() || this.visible()) {
        setTimeout(() => {
          this.restoreHeight();
        });
      }
    });
  }
}
