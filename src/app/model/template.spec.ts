import { TestBed } from '@angular/core/testing';

import { Parser } from './parser';
import { rulesTemplate } from './template';
import { rulesTemplate as rulesTemplateDE } from './template.de';

describe('Rules Template', () => {
  let parser: Parser;

  beforeEach(() => {
    parser = TestBed.inject(Parser);
  });

  it('should be parsed without errors', () => {
    expect(() => parser.parseRules(rulesTemplate)).not.toThrow();
  });

  it('should be parsed without errors (German)', () => {
    expect(() => parser.parseRules(rulesTemplateDE)).not.toThrow();
  });
});
