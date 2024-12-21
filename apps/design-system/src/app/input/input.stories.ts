import type { Meta, StoryObj } from '@storybook/angular';

import { Component, signal } from '@angular/core';
import { IconHelpComponent } from '@travel-packlist/icons';

@Component({
  standalone: true,
  selector: 'ds-input',
  templateUrl: './input.html',
  imports: [IconHelpComponent],
  styles: `
    :host {
      @apply flex flex-col gap-y-4;
    }
    :host > * {
    }
  `,
})
class Input {
  displayHelp = signal(false);
}

const meta: Meta<Input> = {
  component: Input,
  title: 'Components/Inputs',
};

export default meta;
type Story = StoryObj<Input>;

export const inputs: Story = {};
