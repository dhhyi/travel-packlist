import { TestBed } from '@angular/core/testing';
import { Rules } from '@travel-packlist/rules';

import { Parser } from './parser';
import { serializeRule, serializeRules, serializeWeight } from './serializer';

describe('serializer', () => {
  let parser: Parser;

  beforeEach(() => {
    parser = TestBed.inject(Parser);
  });

  it('should serialize a rule with multiple effects', () => {
    const rule = parser.parseRule(
      ':- Will it be sunny? $sunny, [Weather] Umbrella',
    );

    expect(serializeRule(rule)).toMatchInlineSnapshot(`
":-
   Will it be sunny? $sunny,
   [Weather] Umbrella"
`);
  });

  it('should serialize a rule with a condition', () => {
    const rule = parser.parseRule('sunny :- [Weather] Sunglasses');

    expect(serializeRule(rule)).toMatchInlineSnapshot(`
"sunny :-
   [Weather] Sunglasses"
`);
  });

  it('should serialize a rule without condition and single effect', () => {
    const rule = parser.parseRule(':- [Weather] Sunglasses');

    expect(serializeRule(rule)).toMatchInlineSnapshot(
      `":- [Weather] Sunglasses"`,
    );
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

  it('should serialize a rule with a title', () => {
    const rules = [parser.parseRule(':- [Weather] Sunglasses')] as Rules;
    rules.title = 'Test Title';

    expect(serializeRules(rules)).toMatchInlineSnapshot(`
"# Test Title

:- [Weather] Sunglasses;"
`);
  });

  describe('serializeWeight', () => {
    it('should serialize a weight', () => {
      expect(serializeWeight(123)).toBe('123g');
    });

    it('should serialize a weight with a decimal', () => {
      expect(serializeWeight(123.456)).toBe('123.456g');
    });

    it('should serialize a weight with a decimal and a zero', () => {
      expect(serializeWeight(123.0)).toBe('123g');
    });

    it('should serialize a weight with preferred unit', () => {
      expect(serializeWeight(123, 'kg')).toBe('0.123kg');
      expect(serializeWeight(123, 'g')).toBe('123g');
    });

    it('should serialize a weight with preferred unit and rounding', () => {
      expect(serializeWeight(123, 'kg', 1)).toBe('0.1kg');
      expect(serializeWeight(123, 'g', 1)).toBe('123g');
      expect(serializeWeight(123, undefined, 1)).toBe('123g');
    });
  });
});
