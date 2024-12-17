import { computed, inject, Injectable } from '@angular/core';
import { Parser, Serializer, Item, Question } from '@travel-packlist/model';
import { GlobalState } from '@travel-packlist/state';

@Injectable({ providedIn: 'root' })
export class RulesClipboard {
  private serializer = inject(Serializer);
  private parser = inject(Parser);

  private state = inject(GlobalState);
  private questions = this.state.signal('clipboardQuestions');
  private items = this.state.signal('clipboardItems');

  readonly itemsCount = computed(() => this.items().length);
  readonly questionsCount = computed(() => this.questions().length);

  cutQuestion(question: Question) {
    this.questions.update((questions) => [
      ...questions,
      this.serializer.serialize(question),
    ]);
  }

  cutItem(item: Item) {
    this.items.update((items) => [...items, this.serializer.serialize(item)]);
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
