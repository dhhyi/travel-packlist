import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-dialog',
  imports: [NgClass],
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  self = DialogComponent;
  static dialogVisible = signal<boolean>(false);
  static dialogPromptVisible = signal<boolean>(false);
  static dialogMessage = signal<string>('');
  static dialogOk = signal<(prompt: string) => void>(noop);
  static dialogCancel = signal<() => void>(noop);
}

function showDialog(prompt = false) {
  DialogComponent.dialogVisible.set(true);
  DialogComponent.dialogPromptVisible.set(prompt);
}

function hideDialog() {
  DialogComponent.dialogVisible.set(false);
  DialogComponent.dialogPromptVisible.set(false);
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

export function prompt(message: string): Promise<string | null> {
  DialogComponent.dialogMessage.set(message);
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
    const input = document.querySelector('#prompt') as HTMLInputElement;
    input.value = '';
    input.focus();
  }, 100);
  showDialog(true);
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
