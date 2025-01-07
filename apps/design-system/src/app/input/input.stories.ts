import type { Meta, StoryObj } from '@storybook/angular';

import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@travel-packlist/components';
import { IconHelpComponent } from '@travel-packlist/icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'ds-input',
  templateUrl: './input.html',
  imports: [IconHelpComponent, ReactiveFormsModule, ComponentsModule, JsonPipe],
  styles: `
    :host {
      @apply flex flex-col gap-y-4;
    }
    :host > * {
    }
  `,
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
    checkbox_help: new FormControl(false),
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
