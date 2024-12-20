import type { Meta, StoryObj } from '@storybook/angular';

import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgTemplateOutlet],
  selector: 'ds-button',
  templateUrl: './button.html',
  styles: `
    .unused {
      @apply italic text-slate-500;
    }
    div {
      @apply content-center text-center;
    }
  `,
})
class Button {
  text: string | undefined = undefined;
}

const meta: Meta<Button> = {
  component: Button,
  title: 'General/Buttons',
  argTypes: {
    text: { control: 'text' },
  },
  args: {
    text: '',
  },
};

export default meta;
type Story = StoryObj<Button>;

export const buttons: Story = {};
