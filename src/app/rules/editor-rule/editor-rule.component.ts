import {
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  Condition,
  Item,
  PleaseSelect,
  Question,
  Rule,
} from '../../../model/types';
import { EditorConditionComponent } from '../editor-condition/editor-condition.component';
import { EditorQuestionComponent } from '../editor-question/editor-question.component';
import { EditorItemComponent } from '../editor-item/editor-item.component';
import { Serializer } from '../../../model/serializer';
import { Parser } from '../../../model/parser';
import { RulesMode } from '../rules.mode';
import { RulesClipboard } from '../rules.clipboard';
import { IconDeleteComponent } from '../../icons/icon-delete/icon-delete.component';
import { IconCutComponent } from '../../icons/icon-cut/icon-cut.component';
import { IconPasteComponent } from '../../icons/icon-paste/icon-paste.component';
import { IconDownComponent } from '../../icons/icon-down/icon-down.component';
import { IconUpComponent } from '../../icons/icon-up/icon-up.component';

@Component({
  selector: 'app-editor-rule',
  standalone: true,
  imports: [
    EditorConditionComponent,
    EditorQuestionComponent,
    EditorItemComponent,
    IconDeleteComponent,
    IconCutComponent,
    IconPasteComponent,
    IconDownComponent,
    IconUpComponent,
  ],
  templateUrl: './editor-rule.component.html',
})
export class EditorRuleComponent {
  rule = input.required<Rule>();
  categories = input.required<string[]>();
  variables = input.required<string[]>();

  ruleChanged = output<Rule | null>();

  ruleDebugString = computed(() => this.serializer.serialize(this.rule()));
  errorMessage = signal<string | null>(null);

  mode = inject(RulesMode);
  clipboard = inject(RulesClipboard);

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

  deleteRule() {
    this.ruleChanged.emit(null);
  }

  resetCondition() {
    this.updateCondition(new PleaseSelect());
  }

  updateCondition(condition: Condition) {
    const newRule = { ...this.rule(), condition };
    if (this.compileRule(newRule)) {
      this.ruleChanged.emit(newRule);
    }
  }

  private emitNewQuestions(questions: Question[]) {
    const newRule = {
      ...this.rule(),
      effects: { ...this.rule().effects, questions },
    };
    if (this.compileRule(newRule)) {
      this.ruleChanged.emit(newRule);
    }
  }

  updateQuestion(index: number, question: Question) {
    const questions = this.rule().effects.questions;
    questions[index] = question;
    this.emitNewQuestions(questions);
  }

  addQuestion() {
    const newQuestion: Question = { variable: '', question: '' };
    this.updateQuestion(this.rule().effects.questions.length, newQuestion);
  }

  deleteQuestion(index: number) {
    const questions = this.rule().effects.questions;
    questions.splice(index, 1);
    this.emitNewQuestions(questions);
  }

  cutQuestion(index: number) {
    const question = this.rule().effects.questions[index];
    this.deleteQuestion(index);
    this.clipboard.cutQuestion(question);
  }

  swapQuestions(index1: number, index2: number) {
    const questions = this.rule().effects.questions;
    const temp = questions[index1];
    questions[index1] = questions[index2];
    questions[index2] = temp;
    this.emitNewQuestions(questions);
  }

  private emitNewItems(items: Item[]) {
    const newRule = {
      ...this.rule(),
      effects: { ...this.rule().effects, items },
    };
    if (this.compileRule(newRule)) {
      this.ruleChanged.emit(newRule);
    }
  }

  updateItem(index: number, item: Item) {
    console.log('updateItem', index, item);

    const items = this.rule().effects.items;
    items[index] = item;
    this.emitNewItems(items);
  }

  addItem() {
    const newItem: Item = { category: 'New', name: 'Item' };
    this.updateItem(this.rule().effects.items.length, newItem);
  }

  deleteItem(index: number) {
    const items = this.rule().effects.items;
    items.splice(index, 1);
    this.emitNewItems(items);
  }

  cutItem(index: number) {
    const item = this.rule().effects.items[index];
    this.deleteItem(index);
    this.clipboard.cutItem(item);
  }

  swapItems(index1: number, index2: number) {
    const items = this.rule().effects.items;
    const temp = items[index1];
    items[index1] = items[index2];
    items[index2] = temp;
    this.emitNewItems(items);
  }

  paste() {
    const clipboard = this.clipboard.paste();
    const newRule = {
      ...this.rule(),
      effects: {
        questions: [...this.rule().effects.questions, ...clipboard.questions],
        items: [...this.rule().effects.items, ...clipboard.items],
      },
    };
    this.ruleChanged.emit(newRule);
  }
}