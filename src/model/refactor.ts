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
    } else if ('variable' in item && 'question' in item) {
      const question = item as Question;
      if (question.variable === oldName) {
        return { ...question, variable: newName };
      }
      return question;
    } else if ('condition' in item && 'effects' in item) {
      const rule = item as Rule;
      return {
        condition: this.renameVariable(oldName, newName, rule.condition),
        effects: {
          questions: rule.effects.questions.map((question) =>
            this.renameVariable(oldName, newName, question),
          ),
          items: rule.effects.items,
        },
      };
    } else {
      const condition = item as Condition;
      if (condition instanceof True) {
        return condition;
      } else if (condition instanceof Variable) {
        if (condition.variable === oldName) {
          return new Variable(newName);
        }
        return condition;
      } else if (condition instanceof Not) {
        return new Not(this.renameVariable(oldName, newName, condition.not));
      } else if (condition instanceof And) {
        return new And(
          this.renameVariable(oldName, newName, condition.left),
          this.renameVariable(oldName, newName, condition.right),
        );
      } else if (condition instanceof Or) {
        return new Or(
          this.renameVariable(oldName, newName, condition.left),
          this.renameVariable(oldName, newName, condition.right),
        );
      }
    }
    console.log('this part is unreachable', item);

    throw new Error('this part is unreachable');
  }
}
