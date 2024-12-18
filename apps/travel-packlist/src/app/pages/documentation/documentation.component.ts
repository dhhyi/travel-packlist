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
  encapsulation: ViewEncapsulation.ShadowDom,
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
      @apply mx-2 my-0 rounded bg-gray-500 p-2 font-mono;
    }

    code {
      @apply bg-gray-500 px-1 font-bold;
      white-space: pre-wrap;
    }

    blockquote {
      @apply mx-2 my-0 mb-2 border-l-4 border-gray-500 p-2;
    }
  `,
})
export default class DocumentationComponent {
  private documentationHtml = inject(RULES_DOCUMENTATION);
  private bypass = inject(DomSanitizer);
  safeHtml = this.bypass.bypassSecurityTrustHtml(this.documentationHtml);
}
