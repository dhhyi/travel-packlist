import { parseRule } from './parser';
import { serialize, serializeRules } from './serializer';

describe('Serializer', () => {
  it('should serialize a rule with multiple effects', () => {
    const rule = parseRule(':- Will it be sunny? $sunny, [Weather] Umbrella');

    expect(serialize(rule)).toEqual(
      `:-
   Will it be sunny? $sunny,
   [Weather] Umbrella`,
    );
  });

  it('should serialize a rule with a condition', () => {
    const rule = parseRule('sunny :- [Weather] Sunglasses');

    expect(serialize(rule)).toEqual(`sunny :-
   [Weather] Sunglasses`);
  });

  it('should serialize a rule without condition and single effect', () => {
    const rule = parseRule(':- [Weather] Sunglasses');

    expect(serialize(rule)).toEqual(`:- [Weather] Sunglasses`);
  });

  it('should serialize multiple rules', () => {
    const rules = [
      parseRule(':- Will it be sunny? $sunny, [Weather] Umbrella'),
      parseRule('sunny :- [Weather] Sunglasses'),
    ];

    expect(serializeRules(rules)).toEqual(`:-
   Will it be sunny? $sunny,
   [Weather] Umbrella;

sunny :-
   [Weather] Sunglasses;`);
  });
});
