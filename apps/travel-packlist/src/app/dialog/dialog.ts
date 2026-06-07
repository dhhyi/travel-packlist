import {
  ChangeDetectionStrategy,
  Component,
  effect,
  output,
  signal,
} from '@angular/core';
import { noop } from 'rxjs';

import { FocusThis } from './focus-this';

@Component({
  selector: 'app-dialog',
  imports: [FocusThis],
  templateUrl: './dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog {
  self = Dialog;
  static readonly dialogVisible = signal(false);
  static readonly dialogPromptVisible = signal(false);
  static readonly dialogPrefill = signal('');
  static readonly dialogCancelVisible = signal(true);
  static readonly dialogMessage = signal('');
  static readonly dialogOk = signal<(prompt: string) => void>(noop);
  static readonly dialogCancel = signal<() => void>(noop);
  static readonly focus = signal<'prompt' | 'ok' | undefined>(undefined);

  readonly overlayVisible = output<boolean>();

  constructor() {
    effect(() => {
      this.overlayVisible.emit(Dialog.dialogVisible());
    });
    effect(() => {
      Dialog.focus();
      setTimeout(() => {
        Dialog.focus.set(undefined);
      }, 500);
    });
  }
}

function showDialog(cancel = true, prompt: string | boolean = false) {
  Dialog.dialogCancelVisible.set(cancel);
  Dialog.dialogPromptVisible.set(prompt !== false);
  if (typeof prompt === 'string') {
    Dialog.dialogPrefill.set(prompt);
  }
  Dialog.focus.set(typeof prompt === 'string' ? 'prompt' : 'ok');
  Dialog.dialogVisible.set(true);
}

function hideDialog() {
  Dialog.dialogVisible.set(false);
  Dialog.dialogPromptVisible.set(false);
  Dialog.dialogPrefill.set('');
  Dialog.dialogCancelVisible.set(true);
}

export function confirm(message: string): Promise<boolean> {
  Dialog.dialogMessage.set(message);
  showDialog();
  return new Promise((resolve) => {
    Dialog.dialogOk.set(() => {
      hideDialog();
      resolve(true);
    });
    Dialog.dialogCancel.set(() => {
      hideDialog();
      resolve(false);
    });
  });
}

export function prompt(message: string, prefill = ''): Promise<string | null> {
  Dialog.dialogMessage.set(message);
  showDialog(true, prefill);
  return new Promise((resolve) => {
    Dialog.dialogOk.set((value: string) => {
      hideDialog();
      resolve(value.trim());
    });
    Dialog.dialogCancel.set(() => {
      hideDialog();
      resolve(null);
    });
  });
}

export function alert(message: string): Promise<void> {
  Dialog.dialogMessage.set(message);
  showDialog(false);
  return new Promise((resolve) => {
    Dialog.dialogOk.set(() => {
      hideDialog();
      resolve();
    });
  });
}
