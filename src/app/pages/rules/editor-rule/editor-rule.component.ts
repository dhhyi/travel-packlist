import {
  Component,
  computed,
  inject,
  input,
  output,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';

import { IconClearComponent } from '../../../icons/icon-clear/icon-clear.component';
import { IconCutComponent } from '../../../icons/icon-cut/icon-cut.component';
import { IconDeleteComponent } from '../../../icons/icon-delete/icon-delete.component';
import { IconDownComponent } from '../../../icons/icon-down/icon-down.component';
import { IconPasteComponent } from '../../../icons/icon-paste/icon-paste.component';
import { IconUpComponent } from '../../../icons/icon-up/icon-up.component';
import { Parser } from '../../../model/parser';
import { Serializer } from '../../../model/serializer';
import {
  Condition,
  Item,
  PleaseSelect,
  Question,
  Rule,
} from '../../../model/types';
import { GlobalState } from '../../../state/global-state';
import { EditorConditionComponent } from '../editor-condition/editor-condition.component';
import { EditorItemComponent } from '../editor-item/editor-item.component';
import { EditorQuestionComponent } from '../editor-question/editor-question.component';
import { RulesClipboard } from '../rules.clipboard';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-rule',
  imports: [
    EditorConditionComponent,
    EditorQuestionComponent,
    EditorItemComponent,
    IconDeleteComponent,
    IconCutComponent,
    IconPasteComponent,
    IconDownComponent,
    IconUpComponent,
    IconClearComponent,
  ],
  templateUrl: './editor-rule.component.html',
})
export class EditorRuleComponent {
  rule = input.required<Rule>();

  readonly ruleChanged = output<Rule>();
  readonly deleteRule = output();
  readonly renameVariable = output<[string, string]>();

  ruleDebugString = computed(() => this.serializer.serialize(this.rule()));
  errorMessage = signal<string | null>(null);

  private state = inject(GlobalState);
  mode = this.state.signal('rulesMode');
  selectVariables = computed(() => {
    const ruleVariables = this.rule().questions.map((q) => q.variable);
    const allVariables = this.state.get('variables');
    return allVariables.filter((v) => !ruleVariables.includes(v));
  });

  private clipboard = inject(RulesClipboard);

  private parser = inject(Parser);
  private serializer = inject(Serializer);

  private compileRule(rule: Rule): boolean {
    try {
      this.parser.parseRule(this.serializer.serialize(rule));
      this.errorMessage.set(null);
      return true;
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage.set(error.message);
      }
      return false;
    }
  }

  resetCondition() {
    this.updateCondition(new PleaseSelect());
  }

  updateCondition(condition: Condition) {
    const newRule = new Rule(
      condition,
      this.rule().questions,
      this.rule().items,
    );
    if (this.compileRule(newRule)) {
      this.ruleChanged.emit(newRule);
    }
  }

  private emitNewQuestions(questions: Question[]) {
    const newRule = new Rule(
      this.rule().condition,
      questions,
      this.rule().items,
    );
    if (this.compileRule(newRule)) {
      this.ruleChanged.emit(newRule);
    }
  }

  updateQuestion(index: number, question: Question) {
    const questions = this.rule().questions;
    questions[index] = question;
    this.emitNewQuestions(questions);
  }

  addQuestion() {
    const newQuestion = new Question(
      Question.NEW_QUESTION_NAME,
      Question.NEW_VARIABLE_NAME,
    );
    this.updateQuestion(this.rule().questions.length, newQuestion);
  }

  deleteQuestion(index: number) {
    const questions = this.rule().questions;
    questions.splice(index, 1);
    this.emitNewQuestions(questions);
  }

  cutQuestion(index: number) {
    const question = this.rule().questions[index];
    this.deleteQuestion(index);
    this.clipboard.cutQuestion(question);
  }

  swapQuestions(index1: number, index2: number) {
    const questions = this.rule().questions;
    const temp = questions[index1];
    questions[index1] = questions[index2];
    questions[index2] = temp;
    this.emitNewQuestions(questions);
  }

  private emitNewItems(items: Item[]) {
    const newRule = new Rule(
      this.rule().condition,
      this.rule().questions,
      items,
    );
    if (this.compileRule(newRule)) {
      this.ruleChanged.emit(newRule);
    }
  }

  updateItem(index: number, item: Item) {
    const items = this.rule().items;
    items[index] = item;
    this.emitNewItems(items);
  }

  addItem() {
    const newItem: Item = new Item(Item.NEW_CATEGORY_NAME, Item.NEW_ITEM_NAME);
    this.updateItem(this.rule().items.length, newItem);
  }

  deleteItem(index: number) {
    const items = this.rule().items;
    items.splice(index, 1);
    this.emitNewItems(items);
  }

  cutItem(index: number) {
    const item = this.rule().items[index];
    this.deleteItem(index);
    this.clipboard.cutItem(item);
  }

  swapItems(index1: number, index2: number) {
    const items = this.rule().items;
    const temp = items[index1];
    items[index1] = items[index2];
    items[index2] = temp;
    this.emitNewItems(items);
  }

  paste() {
    const { questions: cbQuestions, items: cbItems } = this.clipboard.paste();
    const newRule = new Rule(
      this.rule().condition,
      [...this.rule().questions, ...cbQuestions],
      [...this.rule().items, ...cbItems],
    );
    this.ruleChanged.emit(newRule);
  }

  variableChanged([oldVariable, newVariable]: [string, string]) {
    this.renameVariable.emit([oldVariable, newVariable]);
  }
}
