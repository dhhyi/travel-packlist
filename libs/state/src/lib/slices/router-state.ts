import { inject, Signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

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
  packlist(this: NavThis) {
    void this.router.navigate(['/packlist']);
  },
  rules(this: NavThis) {
    void this.router.navigate(['/rules']);
  },
  documentation(this: NavThis) {
    void this.router.navigate(['/documentation']);
  },
  'rules-raw'(this: NavThis) {
    void this.router.navigate(['/rules-raw']);
  },
  'rules->edit'(this: NavThis) {
    void this.router.navigate(['/rules']).then(() => {
      this.rulesMode.set('edit');
    });
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
  return {
    router: {
      /** router: mode of the editor */
      rulesMode,
      /** router: filter query for rules in editor */
      filterRulesQuery: createRouterSignalState<string | undefined>(
        'filterRulesQuery',
        undefined,
      ),
      /** router read-only: current fragment */
      fragment: toSignal(route.fragment) as Signal<string | undefined>,
      /** router: navigate to a page */
      go: (page: keyof typeof navigation) => {
        navigation[page].call({ router, rulesMode });
      },
    },
  };
};
