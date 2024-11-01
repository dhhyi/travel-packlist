import { inject, Injectable, InjectionToken, Injector } from '@angular/core';
import {
  Always,
  And,
  Condition,
  Item,
  Not,
  Or,
  PleaseSelect,
  Question,
  Rule,
  Variable,
} from './types';

export const defaultConfig = {
  isTrackWeight: () => false,
};

export type ParserConfig = typeof defaultConfig;

export const PARSER_CONFIG_PROVIDER = new InjectionToken<ParserConfig>(
  'PARSER_CONFIG_PROVIDER',
);

const itemRegex = /^\s*\[(?<category>.+?)\]\s*(?<name>.+)\s*$/;

const questionRegex = /^\s*(?<question>.*)\s+\$(?<variable>[^ ]+)\s*$/;

@Injectable({ providedIn: 'root' })
export class Parser {
  private injector = inject(Injector);

  parseCondition(input: string): Condition {
    const tokens = input.trim().split(' ');

    if (tokens.includes('OR')) {
      const orIndex = tokens.indexOf('OR');
      return new Or(
        this.parseCondition(tokens.slice(0, orIndex).join(' ')),
        this.parseCondition(tokens.slice(orIndex + 1).join(' ')),
      );
    } else if (tokens.includes('AND')) {
      const andIndex = tokens.indexOf('AND');
      return new And(
        this.parseCondition(tokens.slice(0, andIndex).join(' ')),
        this.parseCondition(tokens.slice(andIndex + 1).join(' ')),
      );
    } else if (tokens[0] === 'NOT') {
      return new Not(this.parseCondition(tokens.slice(1).join(' ')));
    } else if (tokens.length === 1 && !!tokens[0].trim()) {
      const variable = tokens[0].trim();
      if (variable === Always.string) {
        return new Always();
      } else if (variable === PleaseSelect.string) {
        return new PleaseSelect();
      } else {
        return new Variable(variable);
      }
    } else {
      throw new Error(
        $localize`:@@parser.error.condition:Could not parse condition from '${input}:INPUT:'` as string,
      );
    }
  }

  parseQuestion(input: string): Question {
    const tokens = questionRegex.exec(input);
    if (!tokens?.groups) {
      throw new Error(
        $localize`:@@parser.error.question:Could not parse question from '${input}:INPUT:'` as string,
      );
    }

    return new Question(tokens.groups['question'], tokens.groups['variable']);
  }

  extractItemNameAndWeight(input: string | undefined | null): [string, number] {
    if (!input) {
      return ['', 0];
    }

    const state = this.injector.get(PARSER_CONFIG_PROVIDER, defaultConfig);
    if (!state.isTrackWeight()) {
      return [input.trim(), 0];
    }

    const tokens = /^(.+)\s+(\d+(\.\d+)?)(k?g)?$/.exec(input.trim());
    if (tokens) {
      const name = tokens[1].trim();
      const weight = parseFloat(tokens[2]) * (tokens[4] === 'kg' ? 1000 : 1);
      return [name, weight];
    } else {
      return [input.trim(), 0];
    }
  }

  parseItem(input: string): Item {
    const tokens = itemRegex.exec(input);
    if (!tokens?.groups) {
      throw new Error(
        $localize`:@@parser.error.item:Could not parse item from '${input}:INPUT:'` as string,
      );
    }

    const [name, weight] = this.extractItemNameAndWeight(tokens.groups['name']);

    return new Item(tokens.groups['category'], name, weight);
  }

  parseEffects(input: string) {
    const lines = input
      .split(',')
      .map((line) => line.trim())
      .filter(Boolean);

    const questions: Question[] = [];
    const items: Item[] = [];

    for (const line of lines) {
      if (questionRegex.test(line)) {
        questions.push(this.parseQuestion(line));
      } else if (itemRegex.test(line)) {
        items.push(this.parseItem(line));
      } else {
        throw new Error(
          $localize`:@@parser.error.effect:Could not parse effect from '${line}:INPUT:'` as string,
        );
      }
    }

    return { questions, items };
  }

  parseRule(input: string): Rule {
    const tokens = input.split(':-');

    if (tokens.length !== 2) {
      throw new Error(
        $localize`:@@parser.error.rule:Could not parse rule from '${input}:INPUT:'` as string,
      );
    }

    let condition: Condition;

    if (!tokens[0].trim()) {
      condition = new Always();
    } else {
      condition = this.parseCondition(tokens[0]);
    }

    const { questions, items } = this.parseEffects(tokens[1]);

    return new Rule(condition, questions, items);
  }

  parseRules(input: string): Rule[] {
    const inputWOComments = input
      .split('\n')
      .filter((line) => !line.trim().startsWith('#'))
      .map((line) => line.replace(/#.*/, ''))
      .join('\n');

    return inputWOComments
      .split(';')
      .map((x) => x.trim())
      .filter(Boolean)
      .map(this.parseRule.bind(this));
  }
}
