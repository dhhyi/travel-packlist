/* eslint-disable @angular-eslint/component-max-inline-declarations */
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RULES_DOCUMENTATION } from '@travel-packlist/rules-documentation';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-documentation',
  standalone: true,
  template: '<div class="rules-documentation" [innerHTML]="safeHtml"></div>',
  // disable encapsulation to allow styling the injected HTML
  // eslint-disable-next-line @angular-eslint/use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  styles: `
    h1 {
      @apply m-0 py-2 text-xl font-bold;
    }

    h2 {
      @apply m-0 py-2 text-lg font-bold;
    }

    h3 {
      @apply m-0 py-2 text-base font-bold;
    }

    p {
      @apply mx-2 my-0 py-1 text-base;
    }

    pre {
      @apply mx-2 my-0 rounded bg-gray-300 p-2 font-mono dark:bg-gray-700;
    }

    code {
      @apply bg-gray-300 px-1 font-bold dark:bg-gray-700;
      white-space: pre-wrap;
    }

    blockquote {
      @apply mx-2 my-0 mb-2 border-l-4 border-gray-300 p-2 dark:border-gray-700;
    }
  `,
})
export class DocumentationComponent {
  private documentationHtml = inject(RULES_DOCUMENTATION);
  private bypass = inject(DomSanitizer);
  safeHtml = this.bypass.bypassSecurityTrustHtml(this.documentationHtml);
}
