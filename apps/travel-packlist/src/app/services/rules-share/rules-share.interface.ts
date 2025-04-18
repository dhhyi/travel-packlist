import { computed, inject } from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

export abstract class RulesShare {
  protected state = inject(GLOBAL_STATE);

  protected readonly exportFileName = computed(() => {
    const dateTime = new Date(this.state.rules.lastAction())
      .toISOString()
      .replace(/\..*$/, '')
      .replace(/[T:]/g, '-');
    const hash = this.state.rules.hash();
    return `travel-packlist-rules-${dateTime}-${hash ?? 'UNDEF'}.txt`;
  });

  abstract exportRules(): Promise<void>;
}
