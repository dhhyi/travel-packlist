import {
  And,
  Condition,
  Effects,
  Item,
  Not,
  Or,
  Question,
  Rule,
  True,
  Variable,
} from './types';

export function parseCondition(input: string): Condition {
  const tokens = input.trim().split(' ');

  if (tokens.includes('OR')) {
    const orIndex = tokens.indexOf('OR');
    return new Or(
      parseCondition(tokens.slice(0, orIndex).join(' ')),
      parseCondition(tokens.slice(orIndex + 1).join(' ')),
    );
  } else if (tokens.includes('AND')) {
    const andIndex = tokens.indexOf('AND');
    return new And(
      parseCondition(tokens.slice(0, andIndex).join(' ')),
      parseCondition(tokens.slice(andIndex + 1).join(' ')),
    );
  } else if (tokens[0] === 'NOT') {
    return new Not(parseCondition(tokens.slice(1).join(' ')));
  } else if (tokens.length === 1 && /^[a-zA-Z0-9_]+$/.test(tokens[0])) {
    return new Variable(tokens[0]);
  } else {
    throw new Error("Could not parse condition from '" + input + "'");
  }
}

const questionRegex = /^\s*(?<question>.*)\s+\$(?<variable>[a-zA-Z0-9_]+)\s*$/;

export function parseQuestion(input: string): Question {
  const tokens = input.match(questionRegex);
  if (!tokens || !tokens.groups) {
    throw new Error("Could not parse question from '" + input + "'");
  }

  return {
    question: tokens.groups['question'],
    variable: tokens.groups['variable'],
  };
}

const itemRegex = /^\s*\[(?<category>.+)\]\s*(?<name>.+)\s*$/;

export function parseItem(input: string): Item {
  const tokens = input.match(itemRegex);
  if (!tokens || !tokens.groups) {
    throw new Error("Could not parse item from '" + input + "'");
  }

  return {
    category: tokens.groups['category'],
    name: tokens.groups['name'],
  };
}

export function parseEffects(input: string): Effects {
  const lines = input
    .split(',')
    .map((line) => line.trim())
    .filter(Boolean);

  const questions: Question[] = [];
  const items: Item[] = [];

  for (const line of lines) {
    if (questionRegex.test(line)) {
      questions.push(parseQuestion(line));
    } else if (itemRegex.test(line)) {
      items.push(parseItem(line));
    } else {
      throw new Error("Could not parse effect from '" + line + "'");
    }
  }

  return { questions, items };
}

export function parseRule(input: string): Rule {
  const tokens = input.split(':-');

  if (tokens.length !== 2) {
    throw new Error("Could not parse rule from '" + input + "'");
  }

  let condition: Condition;

  if (!tokens[0].trim()) {
    condition = new True();
  } else {
    condition = parseCondition(tokens[0]);
  }

  return {
    condition,
    effects: parseEffects(tokens[1]),
  };
}

export function parseRules(input: string): Rule[] {
  const inputWOComments = input
    .split('\n')
    .filter((line) => !line.trim().startsWith('#'))
    .map((line) => line.replace(/#.*/, ''))
    .join('\n');

  return inputWOComments
    .split(';')
    .map((x) => x.trim())
    .filter(Boolean)
    .map(parseRule);
}

export function extractVariables(rules: Rule[]): string[] {
  const variables = new Set<string>();

  for (const rule of rules) {
    for (const question of rule.effects.questions) {
      variables.add(question.variable);
    }
  }

  return Array.from(variables);
}

export function extractCategories(rules: Rule[]): string[] {
  const categories = new Set<string>();

  for (const rule of rules) {
    for (const item of rule.effects.items) {
      categories.add(item.category);
    }
  }

  return Array.from(categories);
}
