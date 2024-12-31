import { TestBed } from '@angular/core/testing';

import { Parser } from './parser';
import { Refactor } from './refactor';
import { serializeRules } from './serializer';
import { Rule } from './types';

describe('Refactor', () => {
  let refactor: Refactor;
  let parser: Parser;

  beforeEach(() => {
    refactor = TestBed.inject(Refactor);
    parser = TestBed.inject(Parser);
  });

  describe('extractVariables', () => {
    it('should extract variables', () => {
      const rules = [
        parser.parseRule('a AND b :- Is it sunny? $sunny, [utility] Scrubber'),
        parser.parseRule('c OR d :- [utility] Clothesline'),
        parser.parseRule('e :- Will it be cold? $cold'),
      ];

      const variables = refactor.extractVariables(rules);
      expect(variables).toEqual(['sunny', 'cold']);
    });
  });

  describe('extractCategories', () => {
    it('should extract categories', () => {
      const rules = [
        parser.parseRule('a AND b :- Is it sunny? $sunny, [utility] Scrubber'),
        parser.parseRule('c OR d :- [washing] Clothesline'),
        parser.parseRule('e :- Will it be cold? $cold'),
      ];

      const categories = refactor.extractCategories(rules);
      expect(categories).toEqual(['utility', 'washing']);
    });
  });

  describe('renameVariable', () => {
    it('should rename variable in question', () => {
      const question = parser.parseQuestion('Is it sunny? $sunny');
      const result = refactor.renameVariable('sunny', 'rainy', question);
      expect(result.toString()).toMatchInlineSnapshot(`"Is it sunny? $rainy"`);
    });

    it('should rename variable in simple condition', () => {
      const condition = parser.parseCondition('sunny');
      const result = refactor.renameVariable('sunny', 'rainy', condition);

      expect(result.toString()).toMatchInlineSnapshot(`"rainy"`);
    });

    it('should rename variable in complex condition', () => {
      const condition = parser.parseCondition('sunny AND rainy');
      const result = refactor.renameVariable('sunny', 'cloudy', condition);

      expect(result.toString()).toMatchInlineSnapshot(`"cloudy AND rainy"`);
    });

    it('should rename variable in rule', () => {
      const rule = parser.parseRule(
        'sunny :- Is it rainy? $rainy, [weather] umbrella',
      );
      const result = refactor.renameVariable('sunny', 'cloudy', rule);

      expect(result.toString()).toMatchInlineSnapshot(`
"cloudy :-
   Is it rainy? $rainy,
   [weather] umbrella"
`);
    });

    it('should rename variable in rules', () => {
      const rules = [
        parser.parseRule('sunny :- Is it rainy? $rainy, [weather] umbrella'),
        parser.parseRule(
          'rainy AND cloudy :- Is it windy? $windy, [weather] jacket',
        ),
      ];
      let result = refactor.renameVariable('rainy', 'rain', rules);
      result = refactor.renameVariable('cloudy', 'clouds', result);
      result = refactor.renameVariable('windy', 'wind', result);

      expect(serializeRules(result)).toMatchInlineSnapshot(`
"sunny :-
   Is it rainy? $rain,
   [weather] umbrella;

rain AND clouds :-
   Is it windy? $wind,
   [weather] jacket;"
`);
    });
  });

  describe('filterActive', () => {
    let rules: Rule[];

    beforeEach(() => {
      rules = [
        parser.parseRule(':- Will it be sunny? $sunny'),
        parser.parseRule('sunny :- Do you expect a high UV index? $uv'),
        parser.parseRule('NOT sunny :- [Clothes] Beanie'),
        parser.parseRule('uv :- [Utility] Sunscreen'),
      ];
    });

    it('should filter active rules for empty model', () => {
      const result = refactor.filterActive({ model: {}, rules });
      expect(result.rules).toEqual([rules[0], rules[2]]);
      expect(result.model).toEqual({ always: true });
    });

    it('should filter active rules for active model', () => {
      const result = refactor.filterActive({
        model: { sunny: true, uv: true },
        rules,
      });
      expect(result.rules).toEqual([rules[0], rules[1], rules[3]]);
      expect(result.model).toEqual({
        sunny: true,
        uv: true,
        always: true,
      });
    });
    it('should filter active rules and remove transitive disabled fields', () => {
      const result = refactor.filterActive({
        model: { sunny: false, uv: true },
        rules,
      });
      expect(result.rules).toEqual([rules[0], rules[2]]);
      expect(result.model).toEqual({ sunny: false, always: true });
    });
  });

  describe('countItemsAndWeights', () => {
    it('should count items and weights', () => {
      const rules = [
        parser.parseRule(
          ':- [utility] Scrubber 130g, [clothes] Down Jacket 835g, [clothes] Beanie 70g',
        ),
        parser.parseRule('wash :- [utility] Clothesline 70g, [utility] clamps'),
      ];

      const result = refactor.countItemsAndWeights(rules);
      expect(result).toEqual({ items: 5, weights: 4 });
    });
  });
});
