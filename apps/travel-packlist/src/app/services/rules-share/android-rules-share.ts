import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

import { RulesShare } from './rules-share.interface';

export class AndroidRulesShare extends RulesShare {
  async exportRules() {
    const path = this.exportFileName();
    const rules = this.state.rules.raw();
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
