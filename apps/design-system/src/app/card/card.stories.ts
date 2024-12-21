import type { Meta, StoryObj } from '@storybook/angular';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ds-card',
  templateUrl: './card.html',
  styles: `
    :host {
      @apply flex flex-col gap-y-4;
    }
    :host > * {
      @apply flex h-[5em] items-center justify-center;
    }
  `,
})
class Card {}

const meta: Meta<Card> = {
  component: Card,
  title: 'Components/Cards',
};

export default meta;
type Story = StoryObj<Card>;

export const cards: Story = {};
