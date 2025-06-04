import type { Meta, StoryObj } from '@storybook/angular';

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { ProgressComponent } from '@travel-packlist/components';

@Component({
  selector: 'ds-progress',
  imports: [ProgressComponent],
  templateUrl: './progress.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4',
  },
})
class Progress {
  readonly animationDuration = signal(0);
  readonly value = signal(0);
  readonly continuousValue = signal(0);
  readonly element = inject(ElementRef);

  constructor() {
    setInterval(() => {
      this.value.update((value) => (value + 20) % 120);
    }, 1000);
    setInterval(() => {
      this.continuousValue.update((value) => (value + 5) % 105);
    }, 500);
    setInterval(() => {
      let el = this.element.nativeElement as HTMLElement;
      while (el.parentElement) {
        el = el.parentElement;
        if (el.classList.contains('animations')) {
          this.animationDuration.set(500);
          return;
        }
      }
      this.animationDuration.set(0);
    }, 1000);
  }
}

const meta: Meta<Progress> = {
  component: Progress,
  title: 'Components/Progress',
};

export default meta;
type Story = StoryObj<Progress>;

export const progress: Story = {};
