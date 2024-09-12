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

export function serializeRules(rules: Rule[]): string {
  return rules
    .map(serialize)
    .map((rule) => rule + ';')
    .join('\n\n');
}

function serializeEffects(effects: Effects): string[] {
  return effects.questions.map(serialize).concat(effects.items.map(serialize));
}

export function serialize(rule: Rule): string;
export function serialize(condition: Condition): string;
export function serialize(question: Question): string;
export function serialize(item: Item): string;
export function serialize(input: Rule | Condition | Question | Item): string {
  if ('condition' in input) {
    const tokens = [];
    const condition = serialize(input.condition);
    if (condition) {
      tokens.push(condition, ' ');
    }
    tokens.push(':-');

    const effects = serializeEffects(input.effects);
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
    return 'NOT ' + serialize(input.not);
  } else if (input instanceof And) {
    return serialize(input.left) + ' AND ' + serialize(input.right);
  } else if (input instanceof Or) {
    return serialize(input.left) + ' OR ' + serialize(input.right);
  } else if ('evaluate' in input) {
    throw new Error('Cannot serialize unknown condition');
  } else if ('question' in input) {
    return input.question + ' $' + input.variable;
  } else if ('category' in input && 'name' in input) {
    return '[' + input.category + '] ' + input.name;
  } else {
    throw new Error('Cannot serialize unknown input');
  }
}
