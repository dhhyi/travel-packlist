import { NgModule } from '@angular/core';

import { CheckboxComponent } from './checkbox/checkbox.component';
import {
  SelectOptionsComponent,
  SelectOptionDirective,
} from './select-options/select-options.component';

@NgModule({
  imports: [CheckboxComponent, SelectOptionsComponent, SelectOptionDirective],
  exports: [CheckboxComponent, SelectOptionsComponent, SelectOptionDirective],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ComponentsModule {}
