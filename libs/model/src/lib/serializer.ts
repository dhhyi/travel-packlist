import {
  Always,
  And,
  Condition,
  Item,
  Not,
  Or,
  Question,
  Rule,
  Rules,
  Variable,
} from './types';

export function serializeRules(rules: Rules): string {
  const title = rules.title?.trim();
  const titleLine = title ? `# ${title}\n\n` : '';
  return (
    titleLine +
    rules
      .map((rule) => serializeRule(rule))
      .map((rule) => rule + ';')
      .join('\n\n')
  );
}

export function serializeWeight(
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
  const weightInGrams = weight.toString() + 'g';

  if (!prefer) {
    return weightInKilos.length <= weightInGrams.length
      ? weightInKilos
      : weightInGrams;
  } else {
    return prefer === 'kg' ? weightInKilos : weightInGrams;
  }
}

export function serializeWeightPartition(
  checked: number,
  total: number,
): string {
  return (
    serializeWeight(checked, undefined, 1) +
    ' / ' +
    serializeWeight(total, undefined, 1)
  );
}

export function serializeRule(rule: Rule): string {
  const tokens = [];
  if (!(rule.condition instanceof Always)) {
    const condition = serializeCondition(rule.condition);
    if (condition) {
      tokens.push(condition, ' ');
    }
  }
  tokens.push(':-');

  const effects = rule.questions
    .map((q) => serializeQuestion(q))
    .concat(rule.items.map((i) => serializeItem(i)));
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
}

export function serializeQuestion(question: Question): string {
  return question.question + ' $' + question.variable;
}

export function serializeItem(item: Item): string {
  let itemStr = `[${item.category}] ${item.name}`.trim();
  if (item.weight) {
    itemStr += ' ' + serializeWeight(item.weight);
  }
  return itemStr;
}

export function serializeCondition(condition: Condition): string {
  if (condition instanceof Variable) {
    return condition.variable;
  } else if (condition instanceof Not) {
    return 'NOT ' + serializeCondition(condition.not);
  } else if (condition instanceof And) {
    return (
      serializeCondition(condition.left) +
      ' AND ' +
      serializeCondition(condition.right)
    );
  } else if (condition instanceof Or) {
    return (
      serializeCondition(condition.left) +
      ' OR ' +
      serializeCondition(condition.right)
    );
  } else {
    throw new Error('Unknown condition type');
  }
}
