import { inject, Injectable } from '@angular/core';
import {
  And,
  Condition,
  Effects,
  Item,
  Not,
  Or,
  Question,
  Rule,
  True,
  Variable,
} from './types';
import { ConfigPersistence } from '../app/config/config.persistence';

const itemRegex = /^\s*\[(?<category>.+)\]\s*(?<name>.+)\s*$/;

const questionRegex = /^\s*(?<question>.*)\s+\$(?<variable>[a-zA-Z0-9_]+)\s*$/;

@Injectable({ providedIn: 'root' })
export class Parser {
  private config = inject(ConfigPersistence);

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
    } else if (tokens.length === 1 && /^[a-zA-Z0-9_]+$/.test(tokens[0])) {
      return new Variable(tokens[0]);
    } else {
      throw new Error("Could not parse condition from '" + input + "'");
    }
  }

  parseQuestion(input: string): Question {
    const tokens = input.match(questionRegex);
    if (!tokens || !tokens.groups) {
      throw new Error("Could not parse question from '" + input + "'");
    }

    return {
      question: tokens.groups['question'],
      variable: tokens.groups['variable'],
    };
  }

  extractItemNameAndWeight(input: string | undefined | null): [string, number] {
    if (!input) {
      return ['', 0];
    }

    if (!this.config.isTrackWeight()) {
      return [input.trim(), 0];
    }

    const tokens = input.trim().match(/^(.+)\s+(\d+(\.\d+)?)(k?g)?$/);
    if (tokens) {
      const name = tokens[1].trim();
      const weight = parseFloat(tokens[2]) * (tokens[4] === 'kg' ? 1000 : 1);
      return [name, weight];
    } else {
      return [input.trim(), 0];
    }
  }

  parseItem(input: string): Item {
    const tokens = input.match(itemRegex);
    if (!tokens || !tokens.groups) {
      throw new Error("Could not parse item from '" + input + "'");
    }

    const [name, weight] = this.extractItemNameAndWeight(tokens.groups['name']);

    return {
      category: tokens.groups['category'],
      name,
      weight,
    };
  }

  parseEffects(input: string): Effects {
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
        throw new Error("Could not parse effect from '" + line + "'");
      }
    }

    return { questions, items };
  }

  parseRule(input: string): Rule {
    const tokens = input.split(':-');

    if (tokens.length !== 2) {
      throw new Error("Could not parse rule from '" + input + "'");
    }

    let condition: Condition;

    if (!tokens[0].trim()) {
      condition = new True();
    } else {
      condition = this.parseCondition(tokens[0]);
    }

    return {
      condition,
      effects: this.parseEffects(tokens[1]),
    };
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

  extractVariables(rules: Rule[]): string[] {
    const variables = new Set<string>();

    for (const rule of rules) {
      for (const question of rule.effects.questions) {
        variables.add(question.variable);
      }
    }

    return Array.from(variables);
  }

  extractCategories(rules: Rule[]): string[] {
    const categories = new Set<string>();

    for (const rule of rules) {
      for (const item of rule.effects.items) {
        categories.add(item.category);
      }
    }

    return Array.from(categories);
  }
}
