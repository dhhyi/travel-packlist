import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '@travel-packlist/state';
import { filter, identity, interval, map, switchMap, tap } from 'rxjs';

import { confirm } from '../dialog';

@Injectable({ providedIn: 'root' })
export class RulesExportReminder {
  private router = inject(Router);
  private state = inject(GlobalState);
  private exportNeeded = this.state.signal('exportNeeded');
  private reminderActive = this.state.signal('exportReminder');
  private lastAskedHash: string[] = [];

  init() {
    interval(30000)
      .pipe(
        filter(
          () =>
            this.reminderActive() &&
            this.exportNeeded() &&
            this.exportOverdue() &&
            this.enoughTimeSinceLastEditPassed(),
        ),
        map(() => this.state.get('rulesHash')),
        filter((currentHash) => !this.lastAskedHash.includes(currentHash)),
        tap((currentHash) => {
          this.lastAskedHash.push(currentHash);
        }),
        switchMap(() =>
          confirm(
            $localize`The current rules haven't been exported for some time now. Do you want to export them now?`,
          ),
        ),
        filter(identity),
      )
      .subscribe(() => {
        void this.router.navigate(['/config'], { fragment: 'export-now' });
      });
  }

  private exportOverdue() {
    const lastExportDate = this.state.get('lastExportDate');
    const now = new Date().getTime();
    return now - lastExportDate > minutesInMilliseconds(10);
  }

  private enoughTimeSinceLastEditPassed() {
    const lastRulesAction = this.state.get('lastRulesAction');
    const now = new Date().getTime();
    return now - lastRulesAction > minutesInMilliseconds(2);
  }
}

function minutesInMilliseconds(minutes: number) {
  return minutes * 60 * 1000;
}
