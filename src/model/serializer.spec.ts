import { TestBed } from '@angular/core/testing';
import { Parser } from './parser';
import { Serializer } from './serializer';

describe('Serializer', () => {
  let serializer: Serializer;
  let parser: Parser;

  beforeEach(() => {
    serializer = TestBed.inject(Serializer);
    parser = TestBed.inject(Parser);
  });

  it('should serialize a rule with multiple effects', () => {
    const rule = parser.parseRule(
      ':- Will it be sunny? $sunny, [Weather] Umbrella',
    );

    expect(serializer.serialize(rule)).toEqual(
      `:-
   Will it be sunny? $sunny,
   [Weather] Umbrella`,
    );
  });

  it('should serialize a rule with a condition', () => {
    const rule = parser.parseRule('sunny :- [Weather] Sunglasses');

    expect(serializer.serialize(rule)).toEqual(`sunny :-
   [Weather] Sunglasses`);
  });

  it('should serialize a rule without condition and single effect', () => {
    const rule = parser.parseRule(':- [Weather] Sunglasses');

    expect(serializer.serialize(rule)).toEqual(`:- [Weather] Sunglasses`);
  });

  it('should serialize multiple rules', () => {
    const rules = [
      parser.parseRule(':- Will it be sunny? $sunny, [Weather] Umbrella'),
      parser.parseRule('sunny :- [Weather] Sunglasses'),
    ];

    expect(serializer.serializeRules(rules)).toEqual(`:-
   Will it be sunny? $sunny,
   [Weather] Umbrella;

sunny :-
   [Weather] Sunglasses;`);
  });

  describe('serializeWeight', () => {
    it('should serialize a weight', () => {
      expect(serializer.serializeWeight(123)).toEqual('123g');
    });

    it('should serialize a weight with a decimal', () => {
      expect(serializer.serializeWeight(123.456)).toEqual('123.456g');
    });

    it('should serialize a weight with a decimal and a zero', () => {
      expect(serializer.serializeWeight(123.0)).toEqual('123g');
    });

    it('should serialize a weight with preferred unit', () => {
      expect(serializer.serializeWeight(123, 'kg')).toEqual('0.123kg');
      expect(serializer.serializeWeight(123, 'g')).toEqual('123g');
    });

    it('should serialize a weight with preferred unit and rounding', () => {
      expect(serializer.serializeWeight(123.456, 'kg', 3)).toEqual('0.123kg');
      expect(serializer.serializeWeight(123.456, 'g', 0)).toEqual('123g');
    });
  });
});
