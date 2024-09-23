import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

type Modes = 'view' | 'delete' | 'edit' | 'cut-paste' | 'swap' | 'search';

const initial: Modes = 'view';

@Injectable({ providedIn: 'root' })
export class RulesMode {
  private embedded = signal<Modes>(initial);

  setMode(mode: Modes) {
    this.embedded.set(mode);
  }

  isMode(...mode: Modes[]) {
    return mode.includes(this.embedded());
  }

  asObservable(): Observable<Modes> {
    return toObservable(this.embedded);
  }

  reset() {
    this.setMode(initial);
  }
}
