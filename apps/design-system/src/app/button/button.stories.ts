import type { Meta, StoryObj } from '@storybook/angular';

import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconCogComponent } from '@travel-packlist/icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet, IconCogComponent],
  selector: 'ds-button',
  templateUrl: './button.html',
  host: {
    class: 'flex flex-col gap-8',
  },
})
class Button {
  text: string | undefined = undefined;
  readonly pressed = signal(true);
  readonly active = signal(true);
}

const meta: Meta<Button> = {
  component: Button,
  title: 'Components/Buttons',
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
