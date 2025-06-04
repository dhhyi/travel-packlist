import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  AvailableDocumentationTopic,
  availableDocumentationTopics,
} from '@travel-packlist/documentation';
import { map } from 'rxjs';

@Component({
  selector: 'app-documentation',
  template: '<div [innerHTML]="safeHtml"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'markdown',
  },
})
export class DocumentationComponent {
  private readonly topic = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['topic'] as AvailableDocumentationTopic),
    ),
    { requireSync: true },
  );
  private readonly documentationHtml = computed(() => {
    const topic = this.topic();
    return inject(availableDocumentationTopics[topic]);
  });
  private bypass = inject(DomSanitizer);
  safeHtml = this.bypass.bypassSecurityTrustHtml(this.documentationHtml());
}
