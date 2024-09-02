import { Injectable } from "@angular/core";
import { VariableName, VariableType } from "../../model/types";

@Injectable({ providedIn: 'root' })
export class PacklistPersistence {
    private answers: Record<VariableName, VariableType> = {};

    constructor() {
        const loaded = localStorage.getItem('answers');
        if (!!loaded) {
            this.answers = JSON.parse(loaded);
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
}
