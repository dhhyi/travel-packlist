import { TestBed } from '@angular/core/testing';
import { Parser } from './parser';
import { rulesTemplate } from './template';

describe('Rules Template', () => {
  let parser: Parser;

  beforeEach(() => {
    parser = TestBed.inject(Parser);
  });

  it('should be parsed without errors', () => {
    expect(() => parser.parseRules(rulesTemplate)).not.toThrow();
  });
});
