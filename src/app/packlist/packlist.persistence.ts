import { Injectable } from '@angular/core';
import { VariableType } from '../../model/types';

@Injectable({ providedIn: 'root' })
export class PacklistPersistence {
  private answers: Record<string, VariableType> = {};
  private checkedItems: string[] = [];

  constructor() {
    const answers = localStorage.getItem('answers');
    if (answers) {
      this.answers = JSON.parse(answers) as PacklistPersistence['answers'];
    }
    const checkedItems = localStorage.getItem('checkedItems');
    if (checkedItems) {
      this.checkedItems = JSON.parse(
        checkedItems,
      ) as PacklistPersistence['checkedItems'];
    }
  }

  getAnswers(): Record<string, VariableType> {
    return this.answers;
  }

  saveAnswers(answers: Record<string, VariableType> | undefined | null): void {
    if (answers) {
      this.answers = answers;
      localStorage.setItem('answers', JSON.stringify(answers));
    } else {
      localStorage.removeItem('answers');
    }
  }

  getCheckedItems(): string[] {
    return this.checkedItems;
  }

  setCheckedItems(checkedItems: string[] | undefined | null): void {
    if (checkedItems) {
      this.checkedItems = checkedItems;
      localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
    } else {
      localStorage.removeItem('checkedItems');
    }
  }

  getCollapsedCategories(): string[] {
    const collapsedCategories = localStorage.getItem('collapsedCategories');
    return collapsedCategories
      ? (JSON.parse(collapsedCategories) as string[])
      : [];
  }

  setCollapsedCategories(
    collapsedCategories: string[] | undefined | null,
  ): void {
    if (collapsedCategories) {
      localStorage.setItem(
        'collapsedCategories',
        JSON.stringify(collapsedCategories),
      );
    } else {
      localStorage.removeItem('collapsedCategories');
    }
  }
}
