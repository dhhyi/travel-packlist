import { TestBed } from '@angular/core/testing';

import { Parser, PARSER_CONFIG_PROVIDER, ParserConfig } from './parser';
import { And, Item, Not, Question, Variable } from './types';

describe('Parser', () => {
  let parser: Parser;
  let trackWeight: boolean;

  beforeEach(() => {
    trackWeight = false;

    TestBed.configureTestingModule({
      providers: [
        {
          provide: PARSER_CONFIG_PROVIDER,
          useValue: {
            isTrackWeight: () => trackWeight,
          } as ParserConfig,
        },
      ],
    });

    parser = TestBed.inject(Parser);
  });

  describe('parseCondition', () => {
    it('should parse a variable', () => {
      const condition = parser.parseCondition('a');
      expect(condition.evaluate({ a: true })).toBe(true);
      expect(condition.evaluate({ a: false })).toBe(false);
    });

    it('should parse a NOT condition', () => {
      const condition = parser.parseCondition('NOT a');
      expect(condition.evaluate({ a: true })).toBe(false);
      expect(condition.evaluate({ a: false })).toBe(true);
    });

    it('should parse an AND condition', () => {
      const condition = parser.parseCondition('a AND b');
      expect(condition.evaluate({ a: true, b: true })).toBe(true);
      expect(condition.evaluate({ a: false, b: true })).toBe(false);
      expect(condition.evaluate({ a: true, b: false })).toBe(false);
      expect(condition.evaluate({ a: false, b: false })).toBe(false);
    });

    it('should parse an OR condition', () => {
      const condition = parser.parseCondition('a OR b');
      expect(condition.evaluate({ a: true, b: true })).toBe(true);
      expect(condition.evaluate({ a: false, b: true })).toBe(true);
      expect(condition.evaluate({ a: true, b: false })).toBe(true);
      expect(condition.evaluate({ a: false, b: false })).toBe(false);
    });

    it('should parse "a AND NOT b" condition', () => {
      const condition = parser.parseCondition('a AND NOT b');
      expect(condition.evaluate({ a: true, b: true })).toBe(false);
      expect(condition.evaluate({ a: false, b: true })).toBe(false);
      expect(condition.evaluate({ a: true, b: false })).toBe(true);
      expect(condition.evaluate({ a: false, b: false })).toBe(false);
    });

    it('should parse "a OR NOT b AND c" condition', () => {
      const condition = parser.parseCondition('a OR NOT b AND c');
      expect(condition.evaluate({ a: true, b: true, c: true })).toBe(true);
      expect(condition.evaluate({ a: false, b: true, c: true })).toBe(false);
      expect(condition.evaluate({ a: true, b: false, c: true })).toBe(true);
      expect(condition.evaluate({ a: false, b: false, c: true })).toBe(true);
      expect(condition.evaluate({ a: true, b: true, c: false })).toBe(true);
      expect(condition.evaluate({ a: false, b: true, c: false })).toBe(false);
      expect(condition.evaluate({ a: true, b: false, c: false })).toBe(true);
      expect(condition.evaluate({ a: false, b: false, c: false })).toBe(false);
    });

    it('should simplify "NOT NOT NOT a" to " NOT a"', () => {
      const condition = parser.parseCondition('NOT NOT NOT a');
      expect(condition instanceof Not).toBe(true);
      expect((condition as Not).not instanceof Variable).toBe(true);
      expect(((condition as Not).not as Variable).variable).toEqual('a');
    });

    it('should simplify "NOT NOT NOT NOT a" to "a"', () => {
      const condition = parser.parseCondition('NOT NOT NOT NOT a');
      expect(condition instanceof Variable).toBe(true);
      expect((condition as Variable).variable).toEqual('a');
    });

    it('should throw an error if the condition is invalid', () => {
      expect(() => parser.parseCondition('a b c')).toThrow();
      expect(() => parser.parseCondition('a OR')).toThrow();
    });
  });

  describe('parseQuestion', () => {
    it('should parse a question', () => {
      const question = parser.parseQuestion('Is it sunny? $sunny');
      expect(question.question).toEqual('Is it sunny?');
      expect(question.variable).toEqual('sunny');
    });

    it('should parse a question without question mark', () => {
      const question = parser.parseQuestion('AirBnB $airbnb');
      expect(question.question).toEqual('AirBnB');
      expect(question.variable).toEqual('airbnb');
    });

    it('should parse a question with cryptic variable name', () => {
      const question = parser.parseQuestion('Is it sunny? $a1-[b2](c3)');
      expect(question.question).toEqual('Is it sunny?');
      expect(question.variable).toEqual('a1-[b2](c3)');
    });

    it('should throw an error if the question is invalid', () => {
      expect(() => parser.parseQuestion('Is it sunny? $')).toThrow();
    });
  });

  describe('parseItem', () => {
    it('should parse an item', () => {
      const item = parser.parseItem('[utility] Scrubber');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber');
    });

    it('should parse an item with long name', () => {
      const item = parser.parseItem('[utility] Scrubber with a complex name');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber with a complex name');
    });

    it('should parse an item with weight as string if weight tracking is off', () => {
      const item = parser.parseItem('[utility] Scrubber 100g');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber 100g');
      expect(item.weight).toBeFalsy();
    });

    it('should parse an item with weight', () => {
      trackWeight = true;

      const item = parser.parseItem('[utility] Scrubber 100');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber');
      expect(item.weight).toEqual(100);
    });

    it('should parse an item with long name and weight', () => {
      trackWeight = true;

      const item = parser.parseItem(
        '[utility] Scrubber with a complex name 100',
      );
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber with a complex name');
      expect(item.weight).toEqual(100);
    });

    it('should parse an item with weight in kilos', () => {
      trackWeight = true;

      const item = parser.parseItem('[utility] Scrubber 0.5kg');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber');
      expect(item.weight).toEqual(500);
    });

    it('should parse an item with weight and only match the last number', () => {
      trackWeight = true;

      const item = parser.parseItem(
        '[utility] Scrubber T 1000 extraordinaire 100g',
      );
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber T 1000 extraordinaire');
      expect(item.weight).toEqual(100);
    });

    it('should throw an error if the item is invalid', () => {
      expect(() => parser.parseItem('[utility]')).toThrow();
      expect(() => parser.parseItem('[] Scrubber')).toThrow();
      expect(() => parser.parseItem('Scrubber')).toThrow();
    });
  });

  describe('parseEffects', () => {
    it('should parse effects', () => {
      const effects = parser.parseEffects(
        'Is it sunny? $sunny, [utility] Scrubber, [utility] Clothesline',
      );

      expect(effects.length).toEqual(3);

      expect(effects[0] instanceof Question).toBe(true);
      const question = effects[0] as Question;
      expect(question.question).toEqual('Is it sunny?');
      expect(question.variable).toEqual('sunny');

      expect(effects[1] instanceof Item).toBe(true);
      const item1 = effects[1] as Item;
      expect(item1.category).toEqual('utility');
      expect(item1.name).toEqual('Scrubber');

      expect(effects[2] instanceof Item).toBe(true);
      const item2 = effects[2] as Item;
      expect(item2.category).toEqual('utility');
      expect(item2.name).toEqual('Clothesline');
    });
  });

  describe('parseRule', () => {
    it('should parse a rule', () => {
      const rule = parser.parseRule(
        'a AND b :- Is it sunny? $sunny, [utility] Scrubber, [utility] Clothesline',
      );

      expect(rule.condition.evaluate({ a: true, b: true })).toBe(true);
      expect(rule.condition instanceof And).toBe(true);
      expect(rule.questions.length).toEqual(1);
      expect(rule.questions[0] instanceof Question).toBe(true);
      expect(rule.items.length).toEqual(2);
      expect(rule.items[0] instanceof Item).toBe(true);
    });
  });

  describe('parseRules', () => {
    it('should parse rules and ignore comments', () => {
      const rules = parser.parseRules(`
        # Weather rules
        :- Is it sunny? $sunny, # always ask
           [utility] Umbrella; # always bring it
      `);

      expect(rules.length).toEqual(1);
    });
  });

  describe('validateVariableName', () => {
    it.each(['a', 'a{0}', 'test-a', 'test_a', 'a1'])(
      'should validate "%s" a valid variable name',
      (name) => {
        parser.validateVariableName(name);
      },
    );

    it.each(['', 'a a', 'test$a', '123', '1a'])(
      'should validate "%s" as an invalid variable name',
      (name) => {
        expect(() => {
          parser.validateVariableName(name);
        }).toThrow();
      },
    );
  });

  describe('validateQuestionString', () => {
    it.each(['Is it sunny? ', 'AirBnB', 'Something cool a1-[b2](c3)'])(
      'should validate "%s" a valid question string',
      (input) => {
        parser.validateQuestionString(input);
      },
    );

    it.each(['', 'Is it sunny? $', 'Is #it', 'It ; is', ' test, not'])(
      'should validate "%s" as an invalid question string',
      (input) => {
        expect(() => {
          parser.validateQuestionString(input);
        }).toThrow();
      },
    );
  });

  describe('validateItemNameAndWeight', () => {
    it.each([
      'Scrubber {124234}',
      'Scrubber 100',
      'Scrubber 0.5kg',
      '[Scrubber]',
    ])('should validate "%s" a valid item name', (input) => {
      parser.validateItemNameAndWeight(input);
    });

    it.each(['', 'Scrubber,', 'test#test', ';'])(
      'should validate "%s" as an invalid item name',
      (input) => {
        expect(() => {
          parser.validateItemNameAndWeight(input);
        }).toThrow();
      },
    );
  });

  describe('validateCategoryName', () => {
    it.each(['utility', 'test', 'a1-b2(c3)'])(
      'should validate "%s" a valid category name',
      (name) => {
        parser.validateCategoryName(name);
      },
    );

    it.each(['', 'test,test', ';', '[cat]', 'test#test'])(
      'should validate "%s" as an invalid category name',
      (name) => {
        expect(() => {
          parser.validateCategoryName(name);
        }).toThrow();
      },
    );
  });

  describe('forceParseWeight', () => {
    it('should parse weight as number', () => {
      expect(parser.forceParseWeight('name 100')).toEqual(100);
    });

    it('should parse weight as number with kilos', () => {
      expect(parser.forceParseWeight('name 0.5kg')).toEqual(500);
    });

    it.only('should return 0 if no weight could be parsed', () => {
      expect(parser.forceParseWeight('test')).toEqual(0);
    });
  });
});
