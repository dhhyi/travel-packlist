import {
  ChangeDetectionStrategy,
  Component,
  effect,
  output,
  signal,
} from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  self = DialogComponent;
  static readonly dialogVisible = signal<boolean>(false);
  static readonly dialogPromptVisible = signal<boolean>(false);
  static readonly dialogCancelVisible = signal<boolean>(true);
  static readonly dialogMessage = signal<string>('');
  static readonly dialogOk = signal<(prompt: string) => void>(noop);
  static readonly dialogCancel = signal<() => void>(noop);

  readonly overlayVisible = output<boolean>();

  constructor() {
    effect(() => {
      this.overlayVisible.emit(DialogComponent.dialogVisible());
    });
  }
}

function showDialog(cancel = true, prompt = false) {
  DialogComponent.dialogCancelVisible.set(cancel);
  DialogComponent.dialogPromptVisible.set(prompt);
  DialogComponent.dialogVisible.set(true);
}

function hideDialog() {
  DialogComponent.dialogVisible.set(false);
  DialogComponent.dialogPromptVisible.set(false);
  DialogComponent.dialogCancelVisible.set(true);
}

function focusPrompt(prefill: string): void {
  const input = document.querySelector<HTMLInputElement>('#prompt');
  if (!input) {
    throw new Error('Prompt input not found');
  }
  input.value = prefill;
  input.focus();
}

function focusOkButton() {
  const button = document.querySelector<HTMLButtonElement>('#ok-button');
  if (!button) {
    throw new Error('Ok button not found');
  }
  button.focus();
}

export function confirm(message: string): Promise<boolean> {
  DialogComponent.dialogMessage.set(message);
  setTimeout(() => {
    focusOkButton();
  }, 100);
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
  setTimeout(() => {
    focusPrompt(prefill);
  }, 100);
  showDialog(true, true);
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
  setTimeout(() => {
    focusOkButton();
  }, 100);
  showDialog(false);
  return new Promise((resolve) => {
    DialogComponent.dialogOk.set(() => {
      hideDialog();
      resolve();
    });
  });
}
