import type { Meta, StoryObj } from '@storybook/angular';

import { Component, Directive, ElementRef, signal } from '@angular/core';

const selectedColor = signal<string | undefined>(undefined);

@Directive({
  selector: 'div.color',
})
class ColorDirective {
  constructor(element: ElementRef<HTMLDivElement>) {
    const color = Array.from(element.nativeElement.classList).find((c) =>
      c.startsWith('bg-'),
    );
    element.nativeElement.addEventListener('click', () => {
      if (color) {
        navigator.clipboard.writeText(color);
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
  standalone: true,
  imports: [ColorDirective],
  selector: 'ds-color',
  templateUrl: './color.html',
  styles: `
    .color {
      @apply min-h-8 min-w-12 rounded-md;
    }
    fieldset {
      @apply flex flex-row gap-1;
    }
  `,
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
