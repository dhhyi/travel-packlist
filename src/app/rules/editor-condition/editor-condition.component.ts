import { Component, computed, input, output } from '@angular/core';
import {
  And,
  Condition,
  Not,
  Or,
  PleaseSelect,
  True,
  Variable,
} from '../../../model/types';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-editor-condition',
  standalone: true,
  imports: [JsonPipe, NgTemplateOutlet],
  templateUrl: './editor-condition.component.html',
  styleUrl: './editor-condition.component.css',
})
export class EditorConditionComponent {
  condition = input.required<Condition>();
  variables = input.required<string[]>();
  forbidden = input<('' | 'not' | 'or' | 'and')[]>([]);
  depth = input<number>(0);

  please_select = PleaseSelect.string;

  options = computed(() => {
    const options: string[] = [];
    if (this.condition() instanceof PleaseSelect) {
      options.push(PleaseSelect.string);
    }
    if (!this.forbidden().includes('')) {
      options.push('');
    }
    options.push(...this.variables());
    for (const op of ['not', 'or', 'and'] as const) {
      if (!this.forbidden().includes(op)) {
        options.push(op);
      }
    }

    return options;
  });

  state = computed(() => {
    const c = this.condition();
    if (c instanceof True) {
      return { type: 'true' };
    } else if (c instanceof Variable) {
      return { type: 'variable', context: c.variable };
    } else if (c instanceof Not) {
      return { type: 'not', condition: c };
    } else if (c instanceof And) {
      return { type: 'and', condition: c };
    } else if (c instanceof Or) {
      return { type: 'or', condition: c };
    } else {
      return { type: 'unknown' };
    }
  });

  asNot(object: Condition | undefined): Not {
    if (object instanceof Not) {
      return object as Not;
    } else {
      throw new Error('Expected Not');
    }
  }

  asAnd(object: Condition | undefined): And {
    if (object instanceof And) {
      return object as And;
    } else {
      throw new Error('Expected And');
    }
  }

  asOr(object: Condition | undefined): Or {
    if (object instanceof Or) {
      return object as Or;
    } else {
      throw new Error('Expected Or');
    }
  }

  conditionChanged = output<Condition>();

  selection(value: '' | 'not' | 'and' | 'or' | string) {
    if (value === '') {
      this.conditionChanged.emit(new True());
    } else if (value === 'not') {
      this.conditionChanged.emit(new Not(new PleaseSelect()));
    } else if (value === 'and') {
      this.conditionChanged.emit(
        new And(new PleaseSelect(), new PleaseSelect()),
      );
    } else if (value === 'or') {
      this.conditionChanged.emit(
        new Or(new PleaseSelect(), new PleaseSelect()),
      );
    } else {
      this.conditionChanged.emit(new Variable(value));
    }
  }

  bubbleNotChange(newNot: Condition) {
    this.conditionChanged.emit(new Not(newNot));
  }

  bubbleAndLeftChange(newLeft: Condition) {
    this.conditionChanged.emit(
      new And(newLeft, this.asAnd(this.state().condition).right),
    );
  }

  bubbleAndRightChange(newRight: Condition) {
    this.conditionChanged.emit(
      new And(this.asAnd(this.state().condition).left, newRight),
    );
  }

  bubbleOrLeftChange(newLeft: Condition) {
    this.conditionChanged.emit(
      new Or(newLeft, this.asOr(this.state().condition).right),
    );
  }

  bubbleOrRightChange(newRight: Condition) {
    this.conditionChanged.emit(
      new Or(this.asOr(this.state().condition).left, newRight),
    );
  }
}
