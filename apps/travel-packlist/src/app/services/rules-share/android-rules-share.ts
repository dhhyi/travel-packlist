import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

import { RulesShare } from './rules-share.interface';

export class AndroidRulesShare extends RulesShare {
  async exportRules() {
    if (this.state.rules.raw.hasValue()) {
      const path = this.exportFileName();
      const rules = this.state.rules.raw.value();
      await Filesystem.writeFile({
        path,
        data: rules,
        directory: Directory.Cache,
        encoding: Encoding.UTF8,
      })
        .then(() =>
          Filesystem.getUri({
            directory: Directory.Cache,
            path,
          }),
        )
        .then((uriResult) =>
          Share.share({
            title: path,
            text: path,
            url: uriResult.uri,
          }),
        );
    }
  }
}
