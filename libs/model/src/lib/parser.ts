import { inject, Injectable, InjectionToken } from '@angular/core';
import {
  parse,
  ParseOptions,
  StartRuleNames,
  SyntaxError,
} from '@travel-packlist/rules';

const defaultConfig = {
  isTrackWeight: () => false,
};

export type ParserConfig = typeof defaultConfig;

export const PARSER_CONFIG_PROVIDER = new InjectionToken<ParserConfig>(
  'PARSER_CONFIG_PROVIDER',
);

@Injectable({ providedIn: 'root' })
export class Parser {
  private config =
    inject(PARSER_CONFIG_PROVIDER, {
      optional: true,
    }) ?? defaultConfig;

  isTrackWeight(): boolean {
    return this.config.isTrackWeight();
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
    return parse(input, this.makeOptions('Condition'));
  }

  parseQuestion(input: string) {
    return parse(input, this.makeOptions('Question'));
  }

  parseItem(input: string) {
    return parse(input, this.makeOptions('Item'));
  }

  parseEffects(input: string) {
    return parse(input, this.makeOptions('Effects'));
  }

  parseRule(input: string) {
    return parse(input, this.makeOptions('Rule'));
  }

  parseRules(input: string) {
    try {
      return parse(input, this.makeOptions('Rules'));
    } catch (error) {
      const message: string[] = [];
      message.push($localize`Error parsing rules`);
      if (error instanceof SyntaxError) {
        const line = error.location.start.line.toString();
        const column = error.location.start.column.toString();
        message.push(' at line ', line, ' column ', column);
        message.push(':', '\n', error.message);
      } else if (error instanceof Error) {
        message.push(error.message);
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

  forceParseWeight(input: string) {
    const parsed = parse(
      input,
      this.makeOptions('ItemNameAndWeight', { forceWeightTracking: true }),
    );

    return parsed.weight ?? 0;
  }
}
