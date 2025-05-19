import { Rules } from './types';

export function serializeRules(rules: Rules): string {
  const title = rules.title?.trim();
  const titleLine = title ? `# ${title}\n\n` : '';
  return (
    titleLine +
    rules
      .map((rule) => rule.toString())
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
