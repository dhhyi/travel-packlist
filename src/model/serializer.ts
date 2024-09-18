import { Injectable } from '@angular/core';
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

@Injectable({ providedIn: 'root' })
export class Serializer {
  serializeRules(rules: Rule[]): string {
    return rules
      .map(this.serialize.bind(this))
      .map((rule) => rule + ';')
      .join('\n\n');
  }

  serializeEffects(effects: Effects): string[] {
    return effects.questions
      .map(this.serialize.bind(this))
      .concat(effects.items.map(this.serialize.bind(this)));
  }

  serializeWeight(weight: number | undefined, prefer?: 'g' | 'kg'): string {
    if (!weight) {
      return '';
    }
    const weightInKilos = weight / 1000.0 + 'kg';
    const weightInGrams = weight * 1.0 + 'g';

    if (!prefer) {
      return weightInKilos.length <= weightInGrams.length
        ? weightInKilos
        : weightInGrams;
    } else {
      return prefer === 'kg' ? weightInKilos : weightInGrams;
    }
  }

  serialize(rule: Rule): string;
  serialize(condition: Condition): string;
  serialize(question: Question): string;
  serialize(item: Item): string;
  serialize(input: Rule | Condition | Question | Item): string {
    if ('condition' in input) {
      const tokens = [];
      const condition = this.serialize(input.condition);
      if (condition) {
        tokens.push(condition, ' ');
      }
      tokens.push(':-');

      const effects = this.serializeEffects(input.effects);
      if (effects.length === 1 && !condition) {
        tokens.push(' ', effects[0]);
      } else {
        for (let index = 0; index < effects.length; index++) {
          const effect = effects[index];
          if (index > 0) {
            tokens.push(',');
          }
          tokens.push('\n', '   ', effect);
        }
      }
      return tokens.join('');
    } else if (input instanceof True) {
      return '';
    } else if (input instanceof Variable) {
      return input.variable;
    } else if (input instanceof Not) {
      return 'NOT ' + this.serialize(input.not);
    } else if (input instanceof And) {
      return this.serialize(input.left) + ' AND ' + this.serialize(input.right);
    } else if (input instanceof Or) {
      return this.serialize(input.left) + ' OR ' + this.serialize(input.right);
    } else if ('evaluate' in input) {
      throw new Error('Cannot serialize unknown condition');
    } else if ('question' in input) {
      return input.question + ' $' + input.variable;
    } else if ('category' in input && 'name' in input) {
      return `[${input.category}] ${input.name} ${this.serializeWeight(input.weight)}`.trim();
    } else {
      throw new Error('Cannot serialize unknown input');
    }
  }
}
