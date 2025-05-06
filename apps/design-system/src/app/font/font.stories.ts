import type { Meta, StoryObj } from '@storybook/angular';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'ds-font',
  templateUrl: './font.html',
  host: {
    class: '*:mb-4 *:flex *:flex-row *:items-center *:gap-x-4',
  },
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
