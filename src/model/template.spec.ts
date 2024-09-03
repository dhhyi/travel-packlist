import { parseRules } from './parser';
import { rulesTemplate } from './template';

describe('Rules Template', () => {
  it('should be parsed without errors', () => {
    expect(() => parseRules(rulesTemplate)).not.toThrow();
  });
});
