import { RulesShare } from './rules-share.interface';

export class WebRulesShare extends RulesShare {
  private async webShareRules() {
    const rules = this.state.rules.raw();
    if (!rules) {
      console.error('No rules available');
      return;
    }
    const fileName = this.exportFileName();
    await navigator.share({
      title: fileName,
      files: [
        new File([rules], fileName, {
          type: 'text/plain',
        }),
      ],
    });
  }

  private downloadRules() {
    const rules = this.state.rules.raw();
    if (!rules) {
      console.error('No rules available');
      return;
    }
    const blob = new Blob([rules], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.exportFileName();
    a.click();
  }

  async exportRules(): Promise<void> {
    if (this.state.browser.isMobile() && 'share' in navigator) {
      await this.webShareRules();
    } else {
      this.downloadRules();
    }
  }
}
