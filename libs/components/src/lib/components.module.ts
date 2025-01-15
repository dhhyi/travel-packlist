import { NgModule } from '@angular/core';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProgressComponent } from './progress/progress.component';
import {
  SelectOptionsComponent,
  SelectOptionDirective,
} from './select-options/select-options.component';

@NgModule({
  imports: [
    CheckboxComponent,
    ProgressComponent,
    SelectOptionsComponent,
    SelectOptionDirective,
  ],
  exports: [
    CheckboxComponent,
    ProgressComponent,
    SelectOptionsComponent,
    SelectOptionDirective,
  ],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ComponentsModule {}
