import { Injectable } from '@angular/core';

import {
  Always,
  And,
  Condition,
  Item,
  Not,
  Or,
  Question,
  Rule,
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

  serializeEffects(effects: Rule): string[] {
    return effects.questions
      .map(this.serialize.bind(this))
      .concat(effects.items.map(this.serialize.bind(this)));
  }

  serializeWeight(
    weight: number | undefined,
    prefer?: 'g' | 'kg',
    roundDigits = -1,
  ): string {
    if (!weight) {
      return '0g';
    }
    const weightInKilos =
      (roundDigits < 0
        ? weight / 1000.0
        : (weight / 1000.0).toFixed(roundDigits)
      ).toString() + 'kg';
    const weightInGrams = (weight * 1.0).toString() + 'g';

    if (!prefer) {
      return weightInKilos.length <= weightInGrams.length
        ? weightInKilos
        : weightInGrams;
    } else {
      return prefer === 'kg' ? weightInKilos : weightInGrams;
    }
  }

  serialize(input: Rule | Condition | Question | Item): string {
    if (input instanceof Rule) {
      const tokens = [];
      if (!(input.condition instanceof Always)) {
        const condition = this.serialize(input.condition);
        if (condition) {
          tokens.push(condition, ' ');
        }
      }
      tokens.push(':-');

      const effects = this.serializeEffects(input);
      if (effects.length === 1 && tokens.length === 1) {
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
    } else if (input instanceof Question) {
      return input.question + ' $' + input.variable;
    } else if (input instanceof Item) {
      let item = `[${input.category}] ${input.name}`.trim();
      if (input.weight) {
        item += ' ' + this.serializeWeight(input.weight);
      }
      return item;
    } else if (input instanceof Variable) {
      return input.variable;
    } else if (input instanceof Not) {
      return 'NOT ' + this.serialize(input.not);
    } else if (input instanceof And) {
      return this.serialize(input.left) + ' AND ' + this.serialize(input.right);
    } else if (input instanceof Or) {
      return this.serialize(input.left) + ' OR ' + this.serialize(input.right);
    }

    // this will never happen
    const type: never = input;
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Cannot serialize unknown input: ' + type);
  }
}
