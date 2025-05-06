import type { Meta, StoryObj } from '@storybook/angular';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'ds-spacing',
  templateUrl: './spacing.html',
  styles: `
    .b {
      height: var(--spacing-8);
      width: var(--spacing-8);
      background-color: var(--color-gray-500);
    }
  `,
  host: {
    class: '*:mb-4 *:flex *:flex-row',
  },
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
