import type { Meta, StoryObj } from '@storybook/angular';

import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  CheckboxComponent,
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { IconHelpComponent } from '@travel-packlist/icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'ds-input',
  templateUrl: './input.html',
  imports: [
    IconHelpComponent,
    CheckboxComponent,
    SelectOptionsComponent,
    SelectOptionDirective,
    ReactiveFormsModule,
    JsonPipe,
  ],
})
class Input {
  form = new FormGroup({
    input: new FormControl(''),
    input_disabled: new FormControl({
      value: 'disabled input',
      disabled: true,
    }),
    select: new FormControl('1'),
    checkbox: new FormControl(false),
    checkbox_help: new FormControl(true),
    radio: new FormControl('option 1'),
  });

  constructor() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}

const meta: Meta<Input> = {
  component: Input,
  title: 'Components/Inputs',
};

export default meta;
type Story = StoryObj<Input>;

export const inputs: Story = {};
