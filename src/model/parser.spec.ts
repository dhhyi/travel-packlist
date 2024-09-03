import {
  parseCondition,
  parseEffects,
  parseItem,
  parseQuestion,
  parseRule,
} from './parser';

describe('Parser', () => {
  describe('parseCondition', () => {
    it('should parse a variable', () => {
      const condition = parseCondition('a');
      expect(condition.evaluate({ a: true })).toBe(true);
      expect(condition.evaluate({ a: false })).toBe(false);
    });

    it('should parse a NOT condition', () => {
      const condition = parseCondition('NOT a');
      expect(condition.evaluate({ a: true })).toBe(false);
      expect(condition.evaluate({ a: false })).toBe(true);
    });

    it('should parse an AND condition', () => {
      const condition = parseCondition('a AND b');
      expect(condition.evaluate({ a: true, b: true })).toBe(true);
      expect(condition.evaluate({ a: false, b: true })).toBe(false);
      expect(condition.evaluate({ a: true, b: false })).toBe(false);
      expect(condition.evaluate({ a: false, b: false })).toBe(false);
    });

    it('should parse an OR condition', () => {
      const condition = parseCondition('a OR b');
      expect(condition.evaluate({ a: true, b: true })).toBe(true);
      expect(condition.evaluate({ a: false, b: true })).toBe(true);
      expect(condition.evaluate({ a: true, b: false })).toBe(true);
      expect(condition.evaluate({ a: false, b: false })).toBe(false);
    });

    it('should parse "a AND NOT b" condition', () => {
      const condition = parseCondition('a AND NOT b');
      expect(condition.evaluate({ a: true, b: true })).toBe(false);
      expect(condition.evaluate({ a: false, b: true })).toBe(false);
      expect(condition.evaluate({ a: true, b: false })).toBe(true);
      expect(condition.evaluate({ a: false, b: false })).toBe(false);
    });

    it('should parse "a OR NOT b AND c" condition', () => {
      const condition = parseCondition('a OR NOT b AND c');
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
      expect(() => parseCondition('a b c')).toThrow();
      expect(() => parseCondition('a OR')).toThrow();
    });
  });

  describe('parseQuestion', () => {
    it('should parse a question', () => {
      const question = parseQuestion('Is it sunny? $sunny(true)');
      expect(question.question).toEqual('Is it sunny?');
      expect(question.variable).toEqual('sunny');
      expect(question.defaultValue).toEqual(true);
    });

    it('should throw an error if the question is invalid', () => {
      expect(() => parseQuestion('Is it sunny? $sunny(true')).toThrow();
      expect(() => parseQuestion('Is it sunny? $sunny')).toThrow();
    });
  });

  describe('parseItem', () => {
    it('should parse an item', () => {
      const item = parseItem('[utility] Scrubber');
      expect(item.category).toEqual('utility');
      expect(item.name).toEqual('Scrubber');
    });

    it('should throw an error if the item is invalid', () => {
      expect(() => parseItem('[utility]')).toThrow();
      expect(() => parseItem('[] Scrubber')).toThrow();
      expect(() => parseItem('Scrubber')).toThrow();
    });
  });

  describe('parseEffects', () => {
    it('should parse effects', () => {
      const effects = parseEffects(
        'Is it sunny? $sunny(true), [utility] Scrubber, [utility] Clothesline',
      );

      expect(effects.questions?.length).toEqual(1);
      expect(effects.questions[0].question).toEqual('Is it sunny?');
      expect(effects.questions[0].variable).toEqual('sunny');
      expect(effects.questions[0].defaultValue).toEqual(true);

      expect(effects.items?.length).toEqual(2);
      expect(effects.items[0].category).toEqual('utility');
      expect(effects.items[0].name).toEqual('Scrubber');
      expect(effects.items[1].category).toEqual('utility');
      expect(effects.items[1].name).toEqual('Clothesline');
    });
  });

  describe('parseRule', () => {
    it('should parse a rule', () => {
      const rule = parseRule(
        'a AND b :- Is it sunny? $sunny(true), [utility] Scrubber, [utility] Clothesline',
      );

      expect(rule.condition.evaluate({ a: true, b: true })).toBe(true);
    });
  });
});
