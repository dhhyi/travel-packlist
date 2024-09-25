import { Injectable } from '@angular/core';
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

@Injectable({ providedIn: 'root' })
export class Refactor {
  extractVariables(rules: Rule[]): string[] {
    const variables = new Set<string>();
    for (const rule of rules) {
      for (const question of rule.questions) {
        variables.add(question.variable);
      }
    }
    return Array.from(variables);
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
    const type: never = item;

    throw new Error('Unknown item type', type);
  }

  filterActiveRules(
    model: Record<string, VariableType>,
    rules: Rule[],
  ): Rule[] {
    const activeRules = rules.filter((rule) => rule.condition.evaluate(model));
    const activeModel = this.extractVariables(activeRules).reduce(
      (acc, variable) => ({ ...acc, [variable]: model[variable] }),
      {},
    );

    if (activeRules.length === rules.length) {
      return rules;
    } else {
      return this.filterActiveRules(activeModel, activeRules);
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
    const type: never = item;

    throw new Error('Unknown item type', type);
  }
}
