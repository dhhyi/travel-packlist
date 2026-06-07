import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { ConfigAppearance } from './config-appearance/config-appearance';
import { ConfigDangerzone } from './config-dangerzone/config-dangerzone';
import { ConfigPacklist } from './config-packlist/config-packlist';
import { ConfigRulesEditor } from './config-rules-editor/config-rules-editor';
import { ConfigRulesImportExport } from './config-rules-import-export/config-rules-import-export';
import { ConfigRulesMode } from './config-rules-mode/config-rules-mode';
import { ConfigRulesRemote } from './config-rules-remote/config-rules-remote';
import { ConfigRulesTemplate } from './config-rules-template/config-rules-template';
import { ConfigRulesViewer } from './config-rules-viewer/config-rules-viewer';
import { ConfigSupport } from './config-support/config-support';
import { ConfigVersion } from './config-version/config-version';

@Component({
  selector: 'app-config',
  imports: [
    ConfigPacklist,
    ConfigRulesEditor,
    ConfigRulesImportExport,
    ConfigAppearance,
    ConfigVersion,
    ConfigSupport,
    ConfigDangerzone,
    ConfigRulesMode,
    ConfigRulesRemote,
    ConfigRulesViewer,
    ConfigRulesTemplate,
  ],
  templateUrl: './config.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: '*:mb-2 *:flex *:flex-col *:gap-2 *:border-b *:pb-2',
  },
})
export class Config {
  private state = inject(GLOBAL_STATE);
  rulesMode = this.state.rules.mode;
}
