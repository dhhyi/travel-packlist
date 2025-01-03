import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  Signal,
} from '@angular/core';
import {
  Item,
  Parser,
  Question,
  Refactor,
  Rule,
  VariableType,
} from '@travel-packlist/model';
import { RULES_TEMPLATE } from '@travel-packlist/rules-template';

import {
  PersistentState,
  SupportedLanguage,
  supportedLanguages,
} from './persistent-state';

export interface DerivedStateType {
  isMobile: boolean;
  scrollY: number;
  preferredLanguage: SupportedLanguage;
  rulesHash: string;
  rulesOrTemplate: string;
  numberOfRules: number;
  rulesContainComments: boolean;
  parsedRules: Rule[];
  ruleParserError: string;
  percentageOfItemsWithWeights: number;
  categories: string[];
  variables: string[];
  activeRules: Rule[];
  activeAnswers: Record<string, VariableType>;
  activeQuestions: Question[];
  activeItems: Item[];
  lastRulesAction: number;
  exportFileName: string;
  exportNeeded: boolean;
}

type Keys = keyof DerivedStateType;

@Injectable({ providedIn: 'root' })
export class DerivedState {
  private state = inject(PersistentState);
  private parser = inject(Parser);
  private refactor = inject(Refactor);
  private rulesTemplate = inject(RULES_TEMPLATE);

  private signalMap = new Map<Keys, Signal<DerivedStateType[Keys]>>();

  constructor() {
    this.initializeSignals();
  }

  private initializeSignals() {
    this.signalMap.set(
      'isMobile',
      computed(() => {
        const ua = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
          ua,
        );
      }),
    );

    const scrollY = signal(window.scrollY);
    window.addEventListener('scroll', () => {
      scrollY.set(window.scrollY);
    });
    this.signalMap.set('scrollY', scrollY.asReadonly());

    this.signalMap.set(
      'preferredLanguage',
      computed(() => {
        const raw = this.state.signal('language')();
        if (raw === 'auto') {
          const languages = navigator.languages.map((l) => l.split('-')[0]);
          const match = languages.find((l) =>
            (supportedLanguages as unknown as string[]).includes(l),
          ) as SupportedLanguage | undefined;
          return match ?? 'en';
        }
        return raw;
      }),
    );

    this.signalMap.set(
      'rulesContainComments',
      computed(() => {
        const raw = this.state.signal('rules')();
        return !!raw && raw.includes('#');
      }),
    );

    const rulesOrTemplate = computed(() => {
      const raw = this.state.signal('rules')();
      if (raw === undefined) {
        return this.rulesTemplate;
      }
      return raw;
    });

    this.signalMap.set('rulesOrTemplate', rulesOrTemplate);

    const ruleParsing = computed(() => {
      try {
        const parsedRules = this.parser.parseRules(rulesOrTemplate());
        return { parsedRules, ruleParserError: '' };
      } catch (error) {
        if (error instanceof Error) {
          console.warn(error.message);
        } else {
          console.error(error);
        }
        const errorText =
          error instanceof Error ? error.message : 'An unknown error occurred';
        return {
          parsedRules: [],
          ruleParserError: errorText,
        };
      }
    });

    this.signalMap.set(
      'numberOfRules',
      computed(() => ruleParsing().parsedRules.length),
    );

    const percentageOfItemsWithWeights = computed(() => {
      const { ruleParserError, parsedRules } = ruleParsing();
      if (!ruleParserError) {
        const { items, weights } =
          this.refactor.countItemsAndWeights(parsedRules);
        return weights / items;
      }
      return 0;
    });

    this.signalMap.set(
      'percentageOfItemsWithWeights',
      percentageOfItemsWithWeights,
    );

    const parsedRules = computed(() => ruleParsing().parsedRules);

    this.signalMap.set('parsedRules', parsedRules);

    this.signalMap.set(
      'ruleParserError',
      computed(() => ruleParsing().ruleParserError),
    );

    this.signalMap.set(
      'categories',
      computed(() => this.refactor.extractCategories(parsedRules())),
    );

    this.signalMap.set(
      'variables',
      computed(() => this.refactor.extractVariables(parsedRules())),
    );

    const active = computed(() =>
      this.refactor.filterActive({
        rules: parsedRules(),
        model: this.state.signal('answers')(),
      }),
    );

    const activeRules = computed(() => active().rules);

    this.signalMap.set('activeRules', activeRules);

    this.signalMap.set(
      'activeAnswers',
      computed(() => active().model),
    );

    this.signalMap.set(
      'activeQuestions',
      computed(() => activeRules().flatMap((rule) => rule.questions)),
    );

    this.signalMap.set(
      'activeItems',
      computed(() => activeRules().flatMap((rule) => rule.items)),
    );

    const rulesHash = computed(() => cyrb53(rulesOrTemplate()).toString(16));
    this.signalMap.set('rulesHash', rulesHash);

    const lastRulesAction = signal(new Date().getTime());
    this.signalMap.set('lastRulesAction', lastRulesAction.asReadonly());

    effect(() => {
      rulesOrTemplate();
      lastRulesAction.set(new Date().getTime());
    });

    this.signalMap.set(
      'exportFileName',
      computed(() => {
        const dateTime = new Date(lastRulesAction())
          .toISOString()
          .replace(/\..*$/, '')
          .replace(/[T:]/g, '-');
        const hash = rulesHash();
        return `travel-packlist-rules-${dateTime}-${hash}.txt`;
      }),
    );

    this.signalMap.set(
      'exportNeeded',
      computed(() => {
        const rulesHash = this.signal('rulesHash')();
        const lastExportHash = this.state.signal('lastExportHash')();
        const hashesDiffer = rulesHash !== lastExportHash;
        const rawRules = this.state.signal('rules')();
        return !!rawRules && hashesDiffer;
      }),
    );
  }

  handles(key: string): key is Keys {
    return this.signalMap.has(key as Keys);
  }

  signal<K extends Keys>(key: K): Signal<DerivedStateType[K]> {
    return this.signalMap.get(key) as Signal<DerivedStateType[K]>;
  }

  get<K extends Keys>(key: K): DerivedStateType[K] {
    return this.signal(key)();
  }
}

/*
  cspell:ignore cyrb bryc

    cyrb53 (c) 2018 bryc (github.com/bryc)
    License: Public domain (or MIT if needed). Attribution appreciated.
    A fast and simple 53-bit string hash function with decent collision resistance.
    Largely inspired by MurmurHash2/3, but with a focus on speed/simplicity.
*/
const cyrb53 = function (str: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
