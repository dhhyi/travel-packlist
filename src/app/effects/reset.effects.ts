import { inject, Injectable } from '@angular/core';
import { GlobalState } from '../state/global-state';

@Injectable({ providedIn: 'root' })
export class ResetEffects {
  private state = inject(GlobalState);

  resetChecklist() {
    this.state.set('answers', {});
    this.state.set('checkedItems', []);
    this.state.set('collapsedCategories', []);
    this.state.set('answersLocked', false);
  }
}
