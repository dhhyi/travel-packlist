import type { Meta, StoryObj } from '@storybook/angular';

import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { disabled, form, FormField } from '@angular/forms/signals';
import {
  CheckboxComponent,
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { IconHelpComponent } from '@travel-packlist/icons';

@Component({
  selector: 'ds-input',
  imports: [
    IconHelpComponent,
    CheckboxComponent,
    SelectOptionsComponent,
    SelectOptionDirective,
    FormField,
    JsonPipe,
  ],
  templateUrl: './input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class Input {
  private readonly formModel = signal({
    input: '',
    input_disabled: 'disabled input',
    select: 'select',
    checkbox: false,
    checkbox_help: true,
    radio: 'option 1',
  });
  form = form(this.formModel, (path) => {
    disabled(path.input_disabled);
  });

  constructor() {
    effect(() => {
      console.log(this.formModel());
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
