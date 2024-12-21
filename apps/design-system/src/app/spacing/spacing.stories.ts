import type { Meta, StoryObj } from '@storybook/angular';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ds-spacing',
  templateUrl: './spacing.html',
  styles: `
    .b {
      @apply h-8 w-8 bg-gray-500;
    }
    :host > fieldset {
      @apply mb-4 flex flex-row;
    }
  `,
})
class Spacing {}

const meta: Meta<Spacing> = {
  component: Spacing,
  title: 'General/Spacing',
  parameters: {
    viewport: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<Spacing>;

export const spacing: Story = {};
