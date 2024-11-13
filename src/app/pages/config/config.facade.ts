import { inject, Injectable } from '@angular/core';
import { GlobalState } from '../../state/global-state';

@Injectable({ providedIn: 'root' })
export class ConfigFacade {
  private state = inject(GlobalState);

  private generateFilename(): string {
    const dateTime = new Date()
      .toISOString()
      .replace(/\..*$/, '')
      .replace(/[T:]/g, '-');
    const hash = this.state.get('rulesHash');
    return `travel-packlist-rules-${dateTime}-${hash}.txt`;
  }

  private downloadRules() {
    const rules = this.state.get('rules');
    if (!rules) {
      console.error('No rules available');
      return;
    }
    const blob = new Blob([rules], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.generateFilename();
    a.click();
  }

  private async shareRules() {
    const rules = this.state.get('rules');
    if (!rules) {
      console.error('No rules available');
      return;
    }
    const fileName = this.generateFilename();
    await navigator.share({
      title: fileName,
      files: [
        new File([rules], fileName, {
          type: 'text/plain',
        }),
      ],
    });
  }

  private resetHash() {
    this.state.set('lastExportHash', this.state.get('rulesHash'));
    this.state.set('lastExportDate', new Date().getTime());
  }

  isExportAvailable(): boolean {
    return !!this.state.get('rules');
  }

  async exportRules() {
    if (this.state.get('isMobile') && 'share' in navigator) {
      await this.shareRules();
    } else {
      this.downloadRules();
    }
    this.resetHash();
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
        this.resetHash();
        resolve(true);
      };
      input.click();
    });
  }

  resetChecklist() {
    this.state.set('answers', {});
    this.state.set('checkedItems', []);
    this.state.set('collapsedCategories', []);
    this.state.set('answersLocked', false);
  }
}
