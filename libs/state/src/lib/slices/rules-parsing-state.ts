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
  readonly error = signal<unknown>(undefined);
  readonly status = signal<ResourceStatus>(ResourceStatus.Idle);

  constructor(
    private readonly parser: Parser,
    private readonly raw: Resource<string | undefined>,
    private readonly trackWeight: () => void,
    private readonly setCurrentTitle: (title: string) => void,
  ) {
    effect(() => {
      this.trackWeight();
      const raw = this.raw.value();
      if (typeof raw === 'string') {
        try {
          const rules = this.parser.parseRules(raw);
          if (rules.title) {
            this.setCurrentTitle(rules.title);
          }
          this.value.set(rules);
          this.error.set(undefined);
          this.status.set(ResourceStatus.Resolved);
        } catch (error) {
          this.error.set(error);
          this.status.set(ResourceStatus.Error);
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

  reload() {
    return this.raw.reload();
  }

  asReadonly(): Resource<Rules> {
    return {
      value: this.value.asReadonly(),
      error: this.error.asReadonly(),
      status: this.status.asReadonly(),
      isLoading: this.isLoading,
      hasValue: this.hasValue.bind(this),
      reload: this.reload.bind(this),
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
        () =>
          parsed.status() === ResourceStatus.Error ||
          raw.status() === ResourceStatus.Error,
      ),
      isLoading: computed(() => parsed.isLoading() || raw.isLoading()),
    },
  };
};

export type RulesParsingState = ReturnType<typeof rulesParsingState>;
