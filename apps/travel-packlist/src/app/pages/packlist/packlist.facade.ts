import { computed, inject, Injectable, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Item, Question, serializeWeight } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

function serialize(item: Pick<Item, 'category' | 'name'>): string {
  return `${item.category}-${item.name}`;
}

interface CategoryView {
  name: string;
  checked: number;
  checkedWeight: number;
  totalWeight: number;
  collapsed: boolean;
  items: (Pick<Item, 'category' | 'name' | 'weight'> & { checked: boolean })[];
}

@Injectable({ providedIn: 'root' })
export class PacklistFacade {
  private router = inject(Router);
  private state = inject(GLOBAL_STATE);

  readonly isAccessibleMode = computed(
    () => this.state.config.accessibility() === 'accessible',
  );

  readonly numberOfItems = computed(() => this.state.active.items().length);

  private readonly checkedItems = this.state.packlist.checkedItems;
  private collapsedCategories = this.state.packlist.collapsedCategories;

  readonly numberOfCheckedItems = computed(() => {
    const activeItems = this.state.active.items().map(serialize);
    return this.checkedItems().filter((item) => activeItems.includes(item))
      .length;
  });

  private isCategoryCollapsed(category: string): boolean {
    return this.collapsedCategories().includes(category);
  }

  toggleCheckedItem = (item: Parameters<typeof serialize>[0]) => {
    const serialized = serialize(item);
    if (this.checkedItems().includes(serialized)) {
      this.checkedItems.update((old) => old.filter((i) => i !== serialized));
    } else {
      this.checkedItems.update((old) => [...old, serialized]);
    }
  };

  toggleCategoryCollapse = (category: string) => {
    if (this.collapsedCategories().includes(category)) {
      this.collapsedCategories.update((old) =>
        old.filter((c) => c !== category),
      );
    } else {
      this.collapsedCategories.update((old) => [...old, category]);
    }
  };

  private readonly categoriesOrderBy: Signal<
    (left: string, right: string) => number
  > = computed(() => {
    const sorting = this.state.config.categorySorting();
    return sorting === 'definition'
      ? () => 0
      : (left, right) => left.localeCompare(right);
  });

  readonly packlist = computed(() => {
    const items = this.state.active.items();
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
          category: item.category,
          name: item.name,
          weight: item.weight,
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
    () => this.state.rules.parsed().length > 0,
  );

  readonly isAnswersLockActive = this.state.packlist.answersLocked;

  private model = this.state.packlist.answers;
  private activeQuestions = this.state.active.questions;

  readonly questions = computed(() =>
    this.activeQuestions().filter(
      (q) => !this.isAnswersLockActive() || this.model()[q.variable],
    ),
  );
  readonly questionsAvailable = computed(
    () => this.activeQuestions().length > 0,
  );

  toggleQuestion = (question: Question): void => {
    if (this.isAnswersLockActive()) {
      return;
    }
    this.model.update((model) => ({
      ...model,
      [question.variable]: !model[question.variable],
    }));
  };

  isQuestionActive = (question: Question): boolean => {
    return this.model()[question.variable];
  };

  toggleAnswersLock = () => {
    this.isAnswersLockActive.update((lock) => !lock);
  };

  trackWeight = this.state.config.trackWeight;

  goToRulesEdit = () => {
    void this.router.navigate(['/rules']).then(() => {
      this.state.router.rulesMode.set('edit');
    });
  };

  goToConfigImport = () => {
    void this.router.navigate(['/config'], { fragment: 'import' });
  };
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
