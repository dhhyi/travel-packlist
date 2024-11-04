import { inject, Injectable } from '@angular/core';
import { GlobalState } from '../state/global-state';

const defaultFileName = 'travel-packlist-rules.txt';

@Injectable({ providedIn: 'root' })
export class ImportExportRulesEffects {
  private state = inject(GlobalState);

  private downloadRules() {
    const rules = this.state.get('rules');
    const blob = new Blob([rules], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = defaultFileName;
    a.click();
  }

  private async shareRules() {
    const rules = this.state.get('rules');
    await navigator.share({
      title: defaultFileName,
      files: [
        new File([rules], defaultFileName, {
          type: 'text/plain',
        }),
      ],
    });
  }

  async exportRules() {
    if (this.state.get('isMobile') && 'share' in navigator) {
      await this.shareRules();
    } else {
      this.downloadRules();
    }
  }

  async importRules() {
    return new Promise<boolean>((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt';
      input.addEventListener('cancel', () => {
        resolve(false);
      });
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) {
          resolve(false);
          return;
        }
        const text = await file.text();
        this.state.set('rules', text);
        resolve(true);
      };
      input.click();
    });
  }
}
