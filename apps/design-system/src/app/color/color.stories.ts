import type { Meta, StoryObj } from '@storybook/angular';

import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  inject,
  signal,
} from '@angular/core';

const selectedColor = signal<string | undefined>(undefined);

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'div[role="button"]',
})
class ColorDirective {
  constructor() {
    const element = inject<ElementRef<HTMLDivElement>>(ElementRef);
    const color = Array.from(element.nativeElement.classList).find((c) =>
      c.startsWith('bg-'),
    );
    element.nativeElement.addEventListener('click', () => {
      if (color) {
        void navigator.clipboard.writeText(color);
        selectedColor.set(color);

        element.nativeElement.classList.add('border');
        setTimeout(() => {
          element.nativeElement.classList.remove('border');
        }, 5000);
      }
    });
  }
}

@Component({
  selector: 'ds-color',
  imports: [ColorDirective],
  templateUrl: './color.html',
  styles: `
    [role='button'] {
      cursor: pointer;
      min-height: var(--spacing-8);
      min-width: var(--spacing-12);
      border-radius: var(--radius-sm);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class Color {
  selectedColor = selectedColor;
}

const meta: Meta<Color> = {
  component: Color,
  title: 'General/Colors',
  parameters: {
    viewport: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<Color>;

export const colors: Story = {};
