import { Injectable } from '@angular/core';
import { Item, Question } from '../../model/types';

@Injectable({ providedIn: 'root' })
export class RulesClipboard {
  private questions: Question[] = [];
  private items: Item[] = [];

  cutQuestion(question: Question) {
    this.questions.push(question);
  }

  cutItem(item: Item) {
    this.items.push(item);
  }

  get itemsCount(): number {
    return this.items.length;
  }

  get questionsCount(): number {
    return this.questions.length;
  }

  paste(): { questions: Question[]; items: Item[] } {
    const clipboard = { questions: this.questions, items: this.items };
    this.questions = [];
    this.items = [];
    return clipboard;
  }
}
