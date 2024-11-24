import { inject, Injectable } from '@angular/core';

import { Parser } from './parser';
import { Serializer } from './serializer';
import {
  And,
  Condition,
  Item,
  Not,
  Or,
  Question,
  Rule,
  Variable,
  VariableType,
} from './types';

interface FilterFunctionType {
  model: Record<string, VariableType>;
  rules: Rule[];
}

@Injectable({ providedIn: 'root' })
export class Refactor {
  private serializer = inject(Serializer);
  private parser = inject(Parser);

  extractVariables(rules: Rule[]): string[] {
    return rules.reduce<string[]>(
      (acc, rule) => [
        ...acc,
        ...rule.questions.map((question) => question.variable),
      ],
      [],
    );
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
    throw new Error('Unknown item type', type);
  }

  filterActive(data: FilterFunctionType): FilterFunctionType {
    const activeRules = data.rules.filter((rule) =>
      rule.condition.evaluate(data.model),
    );
    const activeModel = this.extractVariables(activeRules).reduce<
      Record<string, VariableType>
    >((acc, variable) => ({ ...acc, [variable]: data.model[variable] }), {});

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
    throw new Error('Unknown item type', type);
  }

  countItemsAndWeights(rules: Rule[]): { items: number; weights: number } {
    return rules.reduce(
      (old, rule) => {
        return rule.items.reduce((acc, item) => {
          let itemHasWeight: number;
          if (this.parser.isTrackWeight()) {
            itemHasWeight = item.weight ? 1 : 0;
          } else {
            const { weight } = this.parser.parseItem(
              this.serializer.serialize(item),
              true,
            );
            itemHasWeight = weight ? 1 : 0;
          }
          return {
            items: acc.items + 1,
            weights: acc.weights + itemHasWeight,
          };
        }, old);
      },
      { items: 0, weights: 0 },
    );
  }
}
