import { inject, Injectable } from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { filter, identity, interval, map, switchMap, tap } from 'rxjs';

import { confirm } from '../dialog';

@Injectable({ providedIn: 'root' })
export class RulesExportReminder {
  private state = inject(GLOBAL_STATE);
  private exportNeeded = this.state.rules.exportNeeded;
  private reminderActive = this.state.config.exportReminder;
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
        map(() => this.state.rules.hash()),
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
        this.state.router.go('config#export');
      });
  }

  private exportOverdue() {
    const lastExportDate = this.state.export.lastDate();
    const now = new Date().getTime();
    return now - lastExportDate > minutesInMilliseconds(10);
  }

  private enoughTimeSinceLastEditPassed() {
    const lastRulesAction = this.state.rules.lastAction();
    const now = new Date().getTime();
    return now - lastRulesAction > minutesInMilliseconds(2);
  }
}

function minutesInMilliseconds(minutes: number) {
  return minutes * 60 * 1000;
}
