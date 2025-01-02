import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IconLockOpenComponent,
  IconLockComponent,
  IconCheckmarkComponent,
} from '@travel-packlist/icons';

import { PacklistFacade } from '../packlist.facade';

@Component({
  selector: 'app-display-questions',
  templateUrl: './display-questions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconLockOpenComponent, IconLockComponent, IconCheckmarkComponent],
})
export class DisplayQuestionsComponent {
  facade = inject(PacklistFacade);
}
