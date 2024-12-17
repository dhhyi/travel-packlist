import { inject, Injectable, InjectionToken, Injector } from '@angular/core';

import {
  parse,
  ParseOptions,
  StartRuleNames,
  SyntaxError,
} from '../generated/rules';
import { Condition, Item, Question, Rule } from './types';

const defaultConfig = {
  isTrackWeight: () => false,
};

export type ParserConfig = typeof defaultConfig;

export const PARSER_CONFIG_PROVIDER = new InjectionToken<ParserConfig>(
  'PARSER_CONFIG_PROVIDER',
);

@Injectable({ providedIn: 'root' })
export class Parser {
  private injector = inject(Injector);

  isTrackWeight(): boolean {
    return this.injector
      .get(PARSER_CONFIG_PROVIDER, defaultConfig)
      .isTrackWeight();
  }

  private makeOptions<T extends StartRuleNames>(
    rule: T,
    options: { forceWeightTracking?: boolean } = {},
  ): ParseOptions<T> {
    return {
      startRule: rule,
      trackWeight: options.forceWeightTracking ?? this.isTrackWeight(),
    };
  }

  parseCondition(input: string) {
    return parse(input, this.makeOptions('Condition')) as Condition;
  }

  parseQuestion(input: string) {
    return parse(input, this.makeOptions('Question')) as Question;
  }

  parseItem(input: string, forceWeightTracking?: boolean) {
    return parse(
      input,
      this.makeOptions('Item', { forceWeightTracking }),
    ) as Item;
  }

  parseEffects(input: string) {
    return parse(input, this.makeOptions('Effects')) as (Question | Item)[];
  }

  parseRule(input: string) {
    return parse(input, this.makeOptions('Rule')) as Rule;
  }

  parseRules(input: string) {
    const inputWOComments = input
      .split(/\r?\n/g)
      .map((line) => line.replace(/#.*/, ''))
      .join('\n');

    try {
      return parse(inputWOComments, this.makeOptions('Rules')) as Rule[];
    } catch (error) {
      const message: string[] = [];
      message.push(
        $localize`:@@parser.error.rules:Error parsing rules` as string,
      );
      if (error instanceof SyntaxError) {
        const line = error.location.start.line.toString();
        const column = error.location.start.column.toString();
        message.push(' at line ', line, ' column ', column);
        message.push(':', '\n', error.message);
      } else {
        console.error(error);
      }
      throw new Error(message.join(''));
    }
  }

  validateVariableName(name: string) {
    parse(name, this.makeOptions('VariableName'));
  }

  validateQuestionString(input: string) {
    parse(input, this.makeOptions('QuestionString'));
  }

  validateItemNameAndWeight(input: string) {
    parse(input, this.makeOptions('ItemNameAndWeight'));
  }

  validateCategoryName(name: string) {
    parse(name, this.makeOptions('CategoryName'));
  }
}
