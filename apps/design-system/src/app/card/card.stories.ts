import type { Meta, StoryObj } from '@storybook/angular';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ds-card',
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class Card {}

const meta: Meta<Card> = {
  component: Card,
  title: 'Components/Cards',
};

export default meta;
type Story = StoryObj<Card>;

export const cards: Story = {};
