import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ConfigAppearanceComponent } from './config-appearance/config-appearance.component';
import { ConfigChecklistComponent } from './config-checklist/config-checklist.component';
import { ConfigDangerzoneComponent } from './config-dangerzone/config-dangerzone.component';
import { ConfigRulesEditorComponent } from './config-rules-editor/config-rules-editor.component';
import { ConfigRulesImportExportComponent } from './config-rules-import-export/config-rules-import-export.component';
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
  ],
  templateUrl: './config.component.html',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ConfigComponent {}
