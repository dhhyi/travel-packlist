import { RulesShare } from './rules-share.interface';

export class WebRulesShare extends RulesShare {
  private async webShareRules() {
    if (this.state.rules.raw.hasValue()) {
      const rules = this.state.rules.raw.value();
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
  }

  private downloadRules() {
    if (this.state.rules.raw.hasValue()) {
      const rules = this.state.rules.raw.value();
      const blob = new Blob([rules], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = this.exportFileName();
      a.click();
    }
  }

  async exportRules(): Promise<void> {
    if (this.state.browser.isMobile() && 'share' in navigator) {
      await this.webShareRules();
    } else {
      this.downloadRules();
    }
  }
}
