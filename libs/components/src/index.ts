import { NgModule } from '@angular/core';

import { CheckboxComponent } from './lib/checkbox/checkbox.component';
import {
  SelectOptionsComponent,
  SelectOptionDirective,
} from './lib/select-options/select-options.component';

@NgModule({
  imports: [CheckboxComponent, SelectOptionsComponent, SelectOptionDirective],
  exports: [CheckboxComponent, SelectOptionsComponent, SelectOptionDirective],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ComponentsModule {}
