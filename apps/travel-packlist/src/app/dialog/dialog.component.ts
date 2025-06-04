import {
  ChangeDetectionStrategy,
  Component,
  effect,
  output,
  signal,
} from '@angular/core';
import { noop } from 'rxjs';

import { FocusThisDirective } from './focus-this.directive';

@Component({
  selector: 'app-dialog',
  imports: [FocusThisDirective],
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  self = DialogComponent;
  static readonly dialogVisible = signal<boolean>(false);
  static readonly dialogPromptVisible = signal<boolean>(false);
  static readonly dialogPrefill = signal<string>('');
  static readonly dialogCancelVisible = signal<boolean>(true);
  static readonly dialogMessage = signal<string>('');
  static readonly dialogOk = signal<(prompt: string) => void>(noop);
  static readonly dialogCancel = signal<() => void>(noop);
  static readonly focus = signal<'prompt' | 'ok' | undefined>(undefined);

  readonly overlayVisible = output<boolean>();

  constructor() {
    effect(() => {
      this.overlayVisible.emit(DialogComponent.dialogVisible());
    });
    effect(() => {
      DialogComponent.focus();
      setTimeout(() => {
        DialogComponent.focus.set(undefined);
      }, 500);
    });
  }
}

function showDialog(cancel = true, prompt: string | boolean = false) {
  DialogComponent.dialogCancelVisible.set(cancel);
  DialogComponent.dialogPromptVisible.set(prompt !== false);
  if (typeof prompt === 'string') {
    DialogComponent.dialogPrefill.set(prompt);
  }
  DialogComponent.focus.set(typeof prompt === 'string' ? 'prompt' : 'ok');
  DialogComponent.dialogVisible.set(true);
}

function hideDialog() {
  DialogComponent.dialogVisible.set(false);
  DialogComponent.dialogPromptVisible.set(false);
  DialogComponent.dialogPrefill.set('');
  DialogComponent.dialogCancelVisible.set(true);
}

export function confirm(message: string): Promise<boolean> {
  DialogComponent.dialogMessage.set(message);
  showDialog();
  return new Promise((resolve) => {
    DialogComponent.dialogOk.set(() => {
      hideDialog();
      resolve(true);
    });
    DialogComponent.dialogCancel.set(() => {
      hideDialog();
      resolve(false);
    });
  });
}

export function prompt(message: string, prefill = ''): Promise<string | null> {
  DialogComponent.dialogMessage.set(message);
  showDialog(true, prefill);
  return new Promise((resolve) => {
    DialogComponent.dialogOk.set((value: string) => {
      hideDialog();
      resolve(value.trim());
    });
    DialogComponent.dialogCancel.set(() => {
      hideDialog();
      resolve(null);
    });
  });
}

export function alert(message: string): Promise<void> {
  DialogComponent.dialogMessage.set(message);
  showDialog(false);
  return new Promise((resolve) => {
    DialogComponent.dialogOk.set(() => {
      hideDialog();
      resolve();
    });
  });
}
