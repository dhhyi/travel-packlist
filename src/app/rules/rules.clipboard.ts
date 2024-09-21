import { computed, Injectable, signal } from '@angular/core';
import { Item, Question } from '../../model/types';

@Injectable({ providedIn: 'root' })
export class RulesClipboard {
  private questions = signal<Question[]>([]);
  private items = signal<Item[]>([]);

  cutQuestion(question: Question) {
    this.questions.update((questions) => [...questions, question]);
  }

  cutItem(item: Item) {
    this.items.update((items) => [...items, item]);
  }

  itemsCount = computed(() => this.items().length);

  questionsCount = computed(() => this.questions().length);

  paste(): { questions: Question[]; items: Item[] } {
    const clipboard = { questions: this.questions(), items: this.items() };
    this.questions.set([]);
    this.items.set([]);
    return clipboard;
  }
}
