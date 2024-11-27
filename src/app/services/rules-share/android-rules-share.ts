import { inject } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

import { GlobalState } from '../../state/global-state';
import { RulesShare } from './rules-share.interface';

export class AndroidRulesShare extends RulesShare {
  private state = inject(GlobalState);

  async exportRules() {
    const path = this.state.get('exportFileName');
    const rules = this.state.get('rules');
    if (!rules) {
      console.error('No rules available');
      return;
    }
    await Filesystem.writeFile({
      path,
      data: rules,
      directory: Directory.Cache,
      encoding: Encoding.UTF8,
    })
      .then(() => {
        return Filesystem.getUri({
          directory: Directory.Cache,
          path,
        });
      })
      .then((uriResult) => {
        return Share.share({
          title: path,
          text: path,
          url: uriResult.uri,
        });
      });
  }
}
