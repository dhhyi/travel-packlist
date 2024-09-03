import { Injectable } from "@angular/core";
import { Item, VariableName, VariableType } from "../../model/types";

@Injectable({ providedIn: 'root' })
export class PacklistPersistence {
    private answers: Record<VariableName, VariableType> = {};
    private checkedItems: string[] = [];

    constructor() {
        const answers = localStorage.getItem('answers');
        if (!!answers) {
            this.answers = JSON.parse(answers);
        }
        const checkedItems = localStorage.getItem('checkedItems');
        if (!!checkedItems) {
            this.checkedItems = JSON.parse(checkedItems);
        }
    }

    getAnswers(): Record<VariableName, VariableType> {
        return this.answers;
    }

    saveAnswers(answers: Record<VariableName, VariableType> | undefined | null): void {
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
}
