import { inject, Injectable } from '@angular/core';
import {
  Always,
  And,
  Condition,
  Item,
  Not,
  Or,
  PleaseSelect,
  Question,
  Rule,
  Variable,
  VariableType,
} from '@travel-packlist/rules';

import { Parser } from './parser';

interface FilterFunctionType {
  model: Record<string, VariableType>;
  rules: Rule[];
}

@Injectable({ providedIn: 'root' })
export class Refactor {
  private parser = inject(Parser);

  extractVariablesFromCondition(condition: Condition): Set<string> {
    if (condition instanceof Always || condition instanceof PleaseSelect) {
      return new Set<string>();
    } else if (condition instanceof Variable) {
      return new Set([condition.variable]);
    } else if (condition instanceof Not) {
      return this.extractVariablesFromCondition(condition.not);
    } else if (condition instanceof And || condition instanceof Or) {
      return this.extractVariablesFromCondition(condition.left).union(
        this.extractVariablesFromCondition(condition.right),
      );
    } else {
      throw new Error('unknown condition type');
    }
  }

  extractVariables(rules: Rule[], onlyQuestions = false): Set<string> {
    return rules.reduce<Set<string>>((acc, rule) => {
      const variables = acc.union(
        new Set(rule.questions.map((question) => question.variable)),
      );
      if (onlyQuestions) {
        return variables;
      }
      return variables.union(
        this.extractVariablesFromCondition(rule.condition),
      );
    }, new Set<string>());
  }

  extractCategories(rules: Rule[]): string[] {
    const categories = new Set<string>();
    for (const rule of rules) {
      for (const item of rule.items) {
        categories.add(item.category);
      }
    }
    return Array.from(categories);
  }

  renameVariable(oldName: string, newName: string, rules: Rule[]): Rule[];

  renameVariable(oldName: string, newName: string, rule: Rule): Rule;

  renameVariable(
    oldName: string,
    newName: string,
    question: Question,
  ): Question;

  renameVariable(
    oldName: string,
    newName: string,
    condition: Condition,
  ): Condition;

  renameVariable(
    oldName: string,
    newName: string,
    item: Rule[] | Rule | Question | Condition,
  ): Rule[] | Rule | Question | Condition {
    if (item instanceof Array) {
      return item.map((rule) => this.renameVariable(oldName, newName, rule));
    } else if (item instanceof Question) {
      if (item.variable === oldName) {
        return new Question(item.question, newName);
      }
      return item;
    } else if (item instanceof Rule) {
      return new Rule(
        this.renameVariable(oldName, newName, item.condition),
        item.questions.map((question) =>
          this.renameVariable(oldName, newName, question),
        ),
        item.items,
      );
    } else if (item instanceof Variable) {
      if (item.variable === oldName) {
        return new Variable(newName);
      }
      return item;
    } else if (item instanceof Not) {
      return new Not(this.renameVariable(oldName, newName, item.not));
    } else if (item instanceof And) {
      return new And(
        this.renameVariable(oldName, newName, item.left),
        this.renameVariable(oldName, newName, item.right),
      );
    } else if (item instanceof Or) {
      return new Or(
        this.renameVariable(oldName, newName, item.left),
        this.renameVariable(oldName, newName, item.right),
      );
    }

    // this will never happen
    const type: never = item;
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Unknown item type: ' + type);
  }

  filterActive(data: FilterFunctionType): FilterFunctionType {
    const activeRules = data.rules.filter((rule) =>
      rule.condition.evaluate(data.model),
    );
    const extractedVariables = this.extractVariables(activeRules, true);
    const activeModel = Array.from(extractedVariables).reduce<
      Record<string, VariableType>
    >((acc, variable) => ({ ...acc, [variable]: data.model[variable] }), {
      [Always.string]: true,
    });

    if (activeRules.length === data.rules.length) {
      return { model: activeModel, rules: activeRules };
    } else {
      return this.filterActive({ model: activeModel, rules: activeRules });
    }
  }

  contains(item: Rule | Question | Item | Condition, filter: string): boolean {
    const filterLower = filter.toLowerCase();
    if (item instanceof Rule) {
      return (
        this.contains(item.condition, filter) ||
        item.questions.some((question) => this.contains(question, filter)) ||
        item.items.some((item) => this.contains(item, filter))
      );
    } else if (item instanceof Question) {
      return (
        item.question.toLowerCase().includes(filterLower) ||
        item.variable.toLowerCase().includes(filterLower)
      );
    } else if (item instanceof Item) {
      return (
        item.category.toLowerCase().includes(filterLower) ||
        item.name.toLowerCase().includes(filterLower)
      );
    }
    if (item instanceof Variable) {
      return item.variable.toLowerCase().includes(filterLower);
    } else if (item instanceof Not) {
      return this.contains(item.not, filter);
    } else if (item instanceof And) {
      return (
        this.contains(item.left, filter) || this.contains(item.right, filter)
      );
    } else if (item instanceof Or) {
      return (
        this.contains(item.left, filter) || this.contains(item.right, filter)
      );
    }

    // this will never happen
    const type: never = item;
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Unknown item type: ' + type);
  }

  countItemsAndWeights(rules: Rule[]): { items: number; weights: number } {
    return rules.reduce(
      (old, rule) =>
        rule.items.reduce((acc, item) => {
          let itemHasWeight: number;
          if (this.parser.isTrackWeight()) {
            itemHasWeight = item.weight ? 1 : 0;
          } else {
            const weight = this.parser.forceParseWeight(item.name);
            itemHasWeight = weight ? 1 : 0;
          }
          return {
            items: acc.items + 1,
            weights: acc.weights + itemHasWeight,
          };
        }, old),
      { items: 0, weights: 0 },
    );
  }
}
