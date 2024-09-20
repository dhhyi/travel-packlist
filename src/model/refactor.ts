import { Injectable } from '@angular/core';
import {
  And,
  Condition,
  Not,
  Or,
  Question,
  Rule,
  True,
  Variable,
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
    } else if (item instanceof True) {
      return item;
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
}
