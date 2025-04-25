import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollIntoView {
  private state = inject(GLOBAL_STATE);

  private router = inject(Router);

  init() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.state.router.fragment();
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              // scroll into middle
              const verticalPosition = element.getBoundingClientRect().top;
              if (verticalPosition > window.innerHeight) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              // highlight element
              if (element instanceof HTMLButtonElement) {
                element.classList.add('highlighted');
              }
              element.classList.add('animate-pulse');
              setTimeout(() => {
                element.classList.remove('highlighted');
                element.classList.remove('animate-pulse');
              }, 5000);
              // reset fragment
              setTimeout(() => {
                this.state.router.fragment.set(undefined);
              }, 500);
            }
          }, 100);
        }
      });
  }
}
