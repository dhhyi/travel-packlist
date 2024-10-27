/* eslint-disable @angular-eslint/component-max-inline-declarations */
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-documentation',
  standalone: true,
  templateUrl: './documentation.component.html',
  styles: `
    h1 {
      @apply py-2 text-xl font-bold;
    }

    h2 {
      @apply py-2 text-lg font-bold;
    }

    h3 {
      @apply py-2 text-base font-bold;
    }

    p {
      @apply mx-2 py-1 text-base;
    }

    pre {
      @apply mx-2 rounded bg-gray-500 p-2 font-mono;
    }
  `,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class DocumentationComponent {}
