import { Rule } from './types';

export function serializeRules(rules: Rule[]): string {
  return rules
    .map((rule) => rule.toString())
    .map((rule) => rule + ';')
    .join('\n\n');
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
  const weightInGrams = (weight * 1.0).toString() + 'g';

  if (!prefer) {
    return weightInKilos.length <= weightInGrams.length
      ? weightInKilos
      : weightInGrams;
  } else {
    return prefer === 'kg' ? weightInKilos : weightInGrams;
  }
}
