import type { Meta, StoryObj } from '@storybook/angular';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ds-font',
  templateUrl: './font.html',
  styles: `
    :host > fieldset {
      @apply mb-4 flex flex-row items-center gap-x-4;
    }
  `,
})
class Font {}

const meta: Meta<Font> = {
  component: Font,
  title: 'General/Font',
  parameters: {
    viewport: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<Font>;

export const font: Story = {};
