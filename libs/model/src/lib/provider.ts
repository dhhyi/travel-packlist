import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';

import { Parser, ParserConfig } from './parser';
import { Refactor } from './refactor';

export function provideRulesModel(
  configFn?: () => ParserConfig,
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: Parser,
      useFactory: () => new Parser(configFn?.()),
    },
    {
      provide: Refactor,
      useFactory: () => new Refactor(inject(Parser)),
    },
  ]);
}
