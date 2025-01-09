import { computed, inject, Injectable } from '@angular/core';
import { Parser, Item, Question } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Injectable({ providedIn: 'root' })
export class RulesClipboard {
  private parser = inject(Parser);

  private state = inject(GLOBAL_STATE);
  private questions = this.state.clipboard.questions;
  private items = this.state.clipboard.items;

  readonly itemsCount = computed(() => this.items().length);
  readonly questionsCount = computed(() => this.questions().length);

  cutQuestion(question: Question) {
    this.questions.update((questions) => [...questions, question.toString()]);
  }

  cutItem(item: Item) {
    this.items.update((items) => [...items, item.toString()]);
  }

  paste(): { questions: Question[]; items: Item[] } {
    const clipboard = {
      questions: this.questions().map((e) => this.parser.parseQuestion(e)),
      items: this.items().map((e) => this.parser.parseItem(e)),
    };
    this.questions.set([]);
    this.items.set([]);
    return clipboard;
  }
}
