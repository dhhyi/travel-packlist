import { inject, Injectable } from '@angular/core';
import { GlobalState } from '../state/global-state';
import { interval } from 'rxjs';
import { ImportExportRulesEffects } from '../effects/import-export-rules.effects';

@Injectable({ providedIn: 'root' })
export class RulesExportReminder {
  private state = inject(GlobalState);
  private exportNeeded = this.state.signal('exportNeeded');
  private impExp = inject(ImportExportRulesEffects);
  private lastAskedHash: string[] = [];

  init() {
    interval(30000).subscribe(() => {
      if (
        this.exportNeeded() &&
        this.exportOverdue() &&
        this.enoughTimeSinceLastEditPassed()
      ) {
        const currentHash = this.state.get('rulesHash');
        if (this.lastAskedHash.includes(currentHash)) {
          return;
        }
        this.lastAskedHash.push(currentHash);
        if (
          window.confirm(
            $localize`:@@config.rules.export-reminder.question:The current rules haven't been exported for some time now. Do you want to export them now?` as string,
          )
        ) {
          void this.impExp.exportRules();
        }
      }
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
