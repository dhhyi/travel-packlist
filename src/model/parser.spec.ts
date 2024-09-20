/* eslint-disable @typescript-eslint/no-unsafe-call */
import { TestBed } from '@angular/core/testing';
import { Parser } from './parser';
import { ConfigPersistence } from '../app/config/config.persistence';
import { And, Item, Question } from './types';

describe('Parser', () => {
  let parser: Parser;
  let trackWeight: boolean;

  beforeEach(() => {
    trackWeight = false;

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ConfigPersistence,
          useValue: {
            isTrackWeight() {
              return trackWeight;
            },
          } as Partial<ConfigPersistence>,
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

    it('should parse an item with weight', () => {
      trackWeight = true;

      const item = parser.parseItem('[utility] Scrubber 100g');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber');
      expect(item.weight).toEqual(100);
    });

    it('should parse an item with weight in kilos', () => {
      trackWeight = true;

      const item = parser.parseItem('[utility] Scrubber 0.5kg');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber');
      expect(item.weight).toEqual(500);
    });

    it('should parse an item with brackets in name', () => {
      const item = parser.parseItem('[utility] [Scrubber] bag');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('[Scrubber] bag');
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

      expect(effects.questions.length).toEqual(1);
      expect(effects.questions[0].question).toEqual('Is it sunny?');
      expect(effects.questions[0].variable).toEqual('sunny');

      expect(effects.items.length).toEqual(2);
      expect(effects.items[0].category).toEqual('utility');
      expect(effects.items[0].name).toEqual('Scrubber');
      expect(effects.items[1].category).toEqual('utility');
      expect(effects.items[1].name).toEqual('Clothesline');
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
});
