import { computed, inject, Injectable, Signal } from '@angular/core';
import { Item, Question, Rule, VariableType } from '../model/types';
import { PersistentState } from './persistent-state';
import { Parser } from '../model/parser';
import { Refactor } from '../model/refactor';

export interface DerivedStateType {
  parsedRules: Rule[];
  ruleParserError: string;
  categories: string[];
  variables: string[];
  activeRules: Rule[];
  activeAnswers: Record<string, VariableType>;
  activeQuestions: Question[];
  activeItems: Item[];
}

type Keys = keyof DerivedStateType;

@Injectable({ providedIn: 'root' })
export class DerivedState {
  private state = inject(PersistentState);
  private parser = inject(Parser);
  private refactor = inject(Refactor);

  private signalMap = new Map<Keys, Signal<DerivedStateType[Keys]>>();

  constructor() {
    this.initializeSignals();
  }

  private initializeSignals() {
    const ruleParsing = computed(() => {
      try {
        const parsedRules = this.parser.parseRules(
          this.state.signal('rules')(),
        );
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
  }

  signal<K extends Keys>(key: K): Signal<DerivedStateType[K]> {
    return this.signalMap.get(key) as Signal<DerivedStateType[K]>;
  }

  get<K extends Keys>(key: K): DerivedStateType[K] {
    return this.signal(key)();
  }
}
