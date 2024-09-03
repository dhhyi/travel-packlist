export interface Rule {
  condition: Condition;
  effects: Effects;
}

export interface Question {
  question: string;
  variable: VariableName;
  defaultValue: VariableType;
}

export interface Item {
  category: string;
  name: string;
}

export interface Effects {
  questions: Question[];
  items: Item[];
}

export type VariableName = string;

export type VariableType = boolean;

export interface Condition {
  evaluate(model: Record<VariableName, VariableType>): boolean;
}

export class True implements Condition {
  evaluate(_: Record<VariableName, VariableType>): boolean {
    return true;
  }
}

export class Variable implements Condition {
  constructor(private variable: VariableName) {}

  evaluate(model: Record<VariableName, VariableType>): boolean {
    return model[this.variable];
  }
}

export class Not implements Condition {
  constructor(private not: Condition) {}

  evaluate(model: Record<VariableName, VariableType>): boolean {
    return !this.not.evaluate(model);
  }
}

export class And implements Condition {
  constructor(
    private left: Condition,
    private right: Condition,
  ) {}

  evaluate(model: Record<VariableName, VariableType>): boolean {
    return this.left.evaluate(model) && this.right.evaluate(model);
  }
}

export class Or implements Condition {
  constructor(
    private left: Condition,
    private right: Condition,
  ) {}

  evaluate(model: Record<VariableName, VariableType>): boolean {
    return this.left.evaluate(model) || this.right.evaluate(model);
  }
}
