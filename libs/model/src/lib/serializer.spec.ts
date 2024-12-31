import { TestBed } from '@angular/core/testing';

import { Parser } from './parser';
import { serializeRules, serializeWeight } from './serializer';

describe('Serializer', () => {
  let parser: Parser;

  beforeEach(() => {
    parser = TestBed.inject(Parser);
  });

  it('should serialize a rule with multiple effects', () => {
    const rule = parser.parseRule(
      ':- Will it be sunny? $sunny, [Weather] Umbrella',
    );

    expect(rule.toString()).toMatchInlineSnapshot(`
":-
   Will it be sunny? $sunny,
   [Weather] Umbrella"
`);
  });

  it('should serialize a rule with a condition', () => {
    const rule = parser.parseRule('sunny :- [Weather] Sunglasses');

    expect(rule.toString()).toMatchInlineSnapshot(`
"sunny :-
   [Weather] Sunglasses"
`);
  });

  it('should serialize a rule without condition and single effect', () => {
    const rule = parser.parseRule(':- [Weather] Sunglasses');

    expect(rule.toString()).toMatchInlineSnapshot(`":- [Weather] Sunglasses"`);
  });

  it('should serialize multiple rules', () => {
    const rules = [
      parser.parseRule(':- Will it be sunny? $sunny, [Weather] Umbrella'),
      parser.parseRule('sunny :- [Weather] Sunglasses'),
    ];

    expect(serializeRules(rules)).toMatchInlineSnapshot(`
":-
   Will it be sunny? $sunny,
   [Weather] Umbrella;

sunny :-
   [Weather] Sunglasses;"
`);
  });

  describe('serializeWeight', () => {
    it('should serialize a weight', () => {
      expect(serializeWeight(123)).toMatchInlineSnapshot(`"123g"`);
    });

    it('should serialize a weight with a decimal', () => {
      expect(serializeWeight(123.456)).toMatchInlineSnapshot(`"123.456g"`);
    });

    it('should serialize a weight with a decimal and a zero', () => {
      expect(serializeWeight(123.0)).toMatchInlineSnapshot(`"123g"`);
    });

    it('should serialize a weight with preferred unit', () => {
      expect(serializeWeight(123, 'kg')).toMatchInlineSnapshot(`"0.123kg"`);
      expect(serializeWeight(123, 'g')).toMatchInlineSnapshot(`"123g"`);
    });

    it('should serialize a weight with preferred unit and rounding', () => {
      expect(serializeWeight(123, 'kg', 1)).toMatchInlineSnapshot(`"0.1kg"`);
      expect(serializeWeight(123, 'g', 1)).toMatchInlineSnapshot(`"123g"`);
      expect(serializeWeight(123, undefined, 1)).toMatchInlineSnapshot(`"123g"`);
    });
  });
});
