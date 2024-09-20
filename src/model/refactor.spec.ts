import { TestBed } from '@angular/core/testing';
import { Parser } from './parser';
import { Refactor } from './refactor';
import { Serializer } from './serializer';

describe('Refactor', () => {
  let refactor: Refactor;
  let parser: Parser;
  let serializer: Serializer;

  beforeEach(() => {
    refactor = TestBed.inject(Refactor);
    parser = TestBed.inject(Parser);
    serializer = TestBed.inject(Serializer);
  });

  it('should rename variable in question', () => {
    const question = parser.parseQuestion('Is it sunny? $sunny');
    const result = refactor.renameVariable('sunny', 'rainy', question);
    expect(result.variable).toBe('rainy');
  });

  it('should rename variable in simple condition', () => {
    const condition = parser.parseCondition('sunny');
    const result = refactor.renameVariable('sunny', 'rainy', condition);

    expect(serializer.serialize(result)).toBe('rainy');
  });

  it('should rename variable in complex condition', () => {
    const condition = parser.parseCondition('sunny AND rainy');
    const result = refactor.renameVariable('sunny', 'cloudy', condition);

    expect(serializer.serialize(result)).toBe('cloudy AND rainy');
  });

  it('should rename variable in rule', () => {
    const rule = parser.parseRule(
      'sunny :- Is it rainy? $rainy, [weather] umbrella',
    );
    const result = refactor.renameVariable('sunny', 'cloudy', rule);

    expect(serializer.serialize(result)).toBe(`cloudy :-
   Is it rainy? $rainy,
   [weather] umbrella`);
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

    expect(serializer.serializeRules(result)).toBe(`sunny :-
   Is it rainy? $rain,
   [weather] umbrella;

rain AND clouds :-
   Is it windy? $wind,
   [weather] jacket;`);
  });
});
