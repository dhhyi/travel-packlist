import { Location } from '@angular/common';
import { inject, signal, Signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { createRouterSignalState } from '../persistence/router-signal';

export type RuleModes =
  | 'view'
  | 'delete'
  | 'edit'
  | 'cut-paste'
  | 'swap'
  | 'search';

interface NavThis {
  router: Router;
  rulesMode: WritableSignal<RuleModes>;
}

const navigation = {
  back() {
    window.history.back();
  },
  packlist(this: NavThis) {
    void this.router.navigate(['/packlist']);
  },
  rules(this: NavThis) {
    void this.router.navigate(['/rules']);
  },
  'rules-documentation'(this: NavThis) {
    void this.router.navigateByUrl('/documentation/rules');
  },
  'remote-rules-documentation'(this: NavThis) {
    void this.router.navigateByUrl('/documentation/remote-rules');
  },
  'rules-raw'(this: NavThis) {
    void this.router.navigate(['/rules-raw']);
  },
  'rules->edit'(this: NavThis) {
    void this.router.navigate(['/rules']).then(() => {
      this.rulesMode.set('edit');
    });
  },
  config(this: NavThis) {
    void this.router.navigate(['/config']);
  },
  'config#import'(this: NavThis) {
    void this.router.navigate(['/config'], { fragment: 'import' });
  },
  'config#export'(this: NavThis) {
    void this.router.navigate(['/config'], { fragment: 'export-now' });
  },
};

export const routerState = () => {
  const router = inject(Router);
  const route = inject(ActivatedRoute);
  const rulesMode = createRouterSignalState<RuleModes>('rulesMode', 'view');

  const location = inject(Location);
  const path = signal(location.path());
  router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      if (location.path() !== path()) {
        path.set(location.path());
      }
    });

  return {
    router: {
      /** router: mode of the editor */
      rulesMode,
      /** router: filter query for rules in editor */
      filterRulesQuery: createRouterSignalState<string | undefined>(
        'filterRulesQuery',
        undefined,
      ),
      /** router read-only: current path */
      path: path.asReadonly(),
      /** router read-only: current fragment */
      fragment: toSignal(route.fragment) as Signal<string | undefined>,
      /** router: navigate to a page */
      go: (page: keyof typeof navigation) => {
        navigation[page].call({ router, rulesMode });
      },
    },
  };
};
