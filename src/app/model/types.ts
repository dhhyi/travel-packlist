/* eslint-disable @angular-eslint/runtime-localize */
export class Rule {
  constructor(
    public readonly condition: Condition,
    public readonly questions: Question[] = [],
    public readonly items: Item[] = [],
  ) {}
}

export class Question {
  static NEW_QUESTION_NAME =
    $localize`:@@model.new.question:New Question` as string;
  static NEW_VARIABLE_NAME = 'new_variable';
  constructor(
    public readonly question: string,
    public readonly variable: string,
  ) {}
}

export class Item {
  static NEW_ITEM_NAME = $localize`:@@model.new.item:New Item` as string;
  static NEW_CATEGORY_NAME = $localize`:@@model.new.category:New` as string;
  constructor(
    public readonly category: string,
    public readonly name: string,
    public readonly weight?: number,
  ) {}
}

export type VariableType = boolean;

export type Condition = Variable | Not | And | Or;

export class Variable {
  constructor(public readonly variable: string) {}

  evaluate(model: Record<string, VariableType>): boolean {
    return model[this.variable];
  }
}

export class PleaseSelect extends Variable {
  static readonly string = 'please_select';

  constructor() {
    super(PleaseSelect.string);
  }
}
export class Always extends Variable {
  static readonly string = 'always';

  constructor() {
    super(Always.string);
  }

  override evaluate(): boolean {
    return true;
  }
}

export class Not {
  constructor(public readonly not: Condition) {}

  evaluate(model: Record<string, VariableType>): boolean {
    return !this.not.evaluate(model);
  }
}

export class And {
  constructor(
    public readonly left: Condition,
    public readonly right: Condition,
  ) {}

  evaluate(model: Record<string, VariableType>): boolean {
    return this.left.evaluate(model) && this.right.evaluate(model);
  }
}

export class Or {
  constructor(
    public readonly left: Condition,
    public readonly right: Condition,
  ) {}

  evaluate(model: Record<string, VariableType>): boolean {
    return this.left.evaluate(model) || this.right.evaluate(model);
  }
}
