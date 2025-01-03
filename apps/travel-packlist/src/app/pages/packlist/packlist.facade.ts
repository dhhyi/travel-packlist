import { computed, inject, Injectable, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Item, Question, serializeWeight } from '@travel-packlist/model';
import { GlobalState } from '@travel-packlist/state';

function serialize(item: Item): string {
  return `${item.category}-${item.name}`;
}

interface CategoryView {
  name: string;
  checked: number;
  checkedWeight: number;
  totalWeight: number;
  collapsed: boolean;
  items: (Item & { checked: boolean })[];
}

@Injectable({ providedIn: 'root' })
export class PacklistFacade {
  private router = inject(Router);
  private state = inject(GlobalState);

  readonly numberOfItems = computed(
    () => this.state.signal('activeItems')().length,
  );

  readonly checkedItems = this.state.signal('checkedItems');
  private collapsedCategories = this.state.signal('collapsedCategories');

  isItemChecked(item: Item): boolean {
    return this.checkedItems().includes(serialize(item));
  }

  readonly numberOfCheckedItems = computed(() => {
    const activeItems = this.state.signal('activeItems')().map(serialize);
    return this.checkedItems().filter((item) => activeItems.includes(item))
      .length;
  });

  isCategoryCollapsed(category: string): boolean {
    return this.collapsedCategories().includes(category);
  }

  toggleCheckedItem(item: Item) {
    const serialized = serialize(item);
    if (this.checkedItems().includes(serialized)) {
      this.checkedItems.update((old) => old.filter((i) => i !== serialized));
    } else {
      this.checkedItems.update((old) => [...old, serialized]);
    }
  }

  toggleCategoryCollapse(category: string) {
    if (this.collapsedCategories().includes(category)) {
      this.collapsedCategories.update((old) =>
        old.filter((c) => c !== category),
      );
    } else {
      this.collapsedCategories.update((old) => [...old, category]);
    }
  }

  private readonly categoriesOrderBy: Signal<
    (left: string, right: string) => number
  > = computed(() => {
    const sorting = this.state.signal('categorySorting')();
    return sorting === 'definition'
      ? () => 0
      : (left, right) => left.localeCompare(right);
  });

  readonly packlist = computed(() => {
    const items = this.state.signal('activeItems')();
    const checkedItems = this.checkedItems();
    const unorderedCategories = items.reduce<Record<string, CategoryView>>(
      (groups, item) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!groups[item.category]) {
          groups[item.category] = {
            name: item.category,
            items: [],
            checked: 0,
            collapsed: this.isCategoryCollapsed(item.category),
            totalWeight: 0,
            checkedWeight: 0,
          };
        }
        groups[item.category].items.push({
          ...item,
          checked: checkedItems.includes(serialize(item)),
        });
        if (checkedItems.includes(serialize(item))) {
          groups[item.category].checked++;
          groups[item.category].checkedWeight += item.weight ?? 0;
        }
        groups[item.category].totalWeight += item.weight ?? 0;
        return groups;
      },
      {},
    );
    const categories = Object.entries(unorderedCategories).map((e) => e[1]);
    const sorter = this.categoriesOrderBy();
    categories.sort((l, r) => sorter(l.name, r.name));

    return categories;
  });

  readonly totalWeight = computed(() =>
    this.packlist().reduce((acc, category) => acc + category.totalWeight, 0),
  );

  readonly checkedWeight = computed(() =>
    this.packlist().reduce((acc, category) => acc + category.checkedWeight, 0),
  );

  readonly rulesAvailable = computed(
    () => this.state.signal('numberOfRules')() > 0,
  );

  readonly isAnswersLockActive = this.state.signal('answersLocked');

  private model = this.state.signal('answers');
  private activeQuestions = this.state.signal('activeQuestions');

  readonly questions = computed(() =>
    this.activeQuestions().filter(
      (q) => !this.isAnswersLockActive() || this.model()[q.variable],
    ),
  );
  readonly questionsAvailable = computed(
    () => this.activeQuestions().length > 0,
  );

  toggleQuestion(question: Question): void {
    if (this.isAnswersLockActive()) {
      return;
    }
    this.model.update((model) => ({
      ...model,
      [question.variable]: !model[question.variable],
    }));
  }

  isQuestionActive(question: Question): boolean {
    return this.model()[question.variable];
  }

  toggleAnswersLock() {
    this.isAnswersLockActive.update((lock) => !lock);
  }

  trackWeight = this.state.signal('trackWeight');

  goToRulesEdit() {
    void this.router.navigate(['/rules']).then(() => {
      this.state.set('rulesMode', 'edit');
    });
  }

  goToConfigImport() {
    void this.router.navigate(['/config'], { fragment: 'import' });
  }
}

export { serializeWeight } from '@travel-packlist/model';

export function serializeWeightPartition(
  checked: number,
  total: number,
): string {
  return (
    serializeWeight(checked, undefined, 1) +
    ' / ' +
    serializeWeight(total, undefined, 1)
  );
}
