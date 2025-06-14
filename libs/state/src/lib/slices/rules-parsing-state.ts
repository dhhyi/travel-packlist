import {
  computed,
  effect,
  inject,
  Resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import { Parser } from '@travel-packlist/model';

import { ConfigState } from './config-state';
import { RulesSourceState } from './rules-source-state';

type Rules = ReturnType<Parser['parseRules']>;

class RulesParsingResource implements Resource<Rules> {
  readonly value = signal<Rules>([]);
  readonly error = signal<Error | undefined>(undefined);
  readonly status = signal<ResourceStatus>('idle');

  constructor(
    private readonly parser: Parser,
    private readonly raw: Resource<string | undefined>,
    private readonly trackWeight: () => void,
    private readonly setCurrentTitle: (title: string) => void,
  ) {
    effect(() => {
      this.trackWeight();
      if (
        this.raw.status() === 'resolved' &&
        this.raw.hasValue() &&
        typeof this.raw.value() === 'string'
      ) {
        try {
          const rules = this.parser.parseRules(this.raw.value());
          if (rules.title) {
            this.setCurrentTitle(rules.title);
          }
          this.value.set(rules);
          this.error.set(undefined);
          this.status.set('resolved');
        } catch (error) {
          this.error.set(error as Error);
          this.status.set('error');
        }
      }
    });
  }

  get isLoading() {
    return this.raw.isLoading;
  }

  hasValue(): this is Resource<Rules> {
    return true;
  }

  asReadonly(): Resource<Rules> {
    return {
      value: this.value.asReadonly(),
      error: this.error.asReadonly(),
      status: this.status.asReadonly(),
      isLoading: this.isLoading,
      hasValue: this.hasValue.bind(this),
    };
  }
}

export const rulesParsingState = ({
  config: { trackWeight },
  rules: { raw },
  remoteRules: { setCurrentTitle },
}: RulesSourceState & ConfigState) => {
  const parsed = new RulesParsingResource(
    inject(Parser),
    raw,
    trackWeight,
    setCurrentTitle,
  );

  return {
    rules: {
      /** derived: parsed rules */
      parsed: parsed.asReadonly(),
      /** derived: rules source and parser error */
      hasError: computed(
        () => parsed.status() === 'error' || raw.status() === 'error',
      ),
      isLoading: computed(() => parsed.isLoading() || raw.isLoading()),
    },
  };
};

export type RulesParsingState = ReturnType<typeof rulesParsingState>;
