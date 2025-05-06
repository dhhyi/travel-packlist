import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { ConfigAppearanceComponent } from './config-appearance/config-appearance.component';
import { ConfigChecklistComponent } from './config-checklist/config-checklist.component';
import { ConfigDangerzoneComponent } from './config-dangerzone/config-dangerzone.component';
import { ConfigRulesEditorComponent } from './config-rules-editor/config-rules-editor.component';
import { ConfigRulesImportExportComponent } from './config-rules-import-export/config-rules-import-export.component';
import { ConfigRulesModeComponent } from './config-rules-mode/config-rules-mode.component';
import { ConfigRulesRemoteComponent } from './config-rules-remote/config-rules-remote.component';
import { ConfigRulesTemplateComponent } from './config-rules-template/config-rules-template.component';
import { ConfigRulesViewerComponent } from './config-rules-viewer/config-rules-viewer.component';
import { ConfigSupportComponent } from './config-support/config-support.component';
import { ConfigVersionComponent } from './config-version/config-version.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config',
  imports: [
    ConfigChecklistComponent,
    ConfigRulesEditorComponent,
    ConfigRulesImportExportComponent,
    ConfigAppearanceComponent,
    ConfigVersionComponent,
    ConfigSupportComponent,
    ConfigDangerzoneComponent,
    ConfigRulesModeComponent,
    ConfigRulesRemoteComponent,
    ConfigRulesViewerComponent,
    ConfigRulesTemplateComponent,
  ],
  templateUrl: './config.component.html',
  host: {
    class: '*:mb-2 *:flex *:flex-col *:gap-2 *:border-b *:pb-2',
  },
})
export class ConfigComponent {
  private state = inject(GLOBAL_STATE);
  rulesMode = this.state.rules.mode;
}
