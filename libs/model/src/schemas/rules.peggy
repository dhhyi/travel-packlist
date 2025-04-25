{{
  import { Question, Rule, Item, Variable, Always, Not, And, Or } from "../lib/types";

  function createRule(condition, effects) {
    const questions = effects.filter(effect => effect instanceof Question);
    const items = effects.filter(effect => effect instanceof Item);
    return new Rule(condition ?? new Always(), questions, items);
  }

  function createAND(conditions) {
    return conditions.length === 1 ? conditions[0] : new And(conditions[0], createAND(conditions.slice(1)));
  }

  function createOR(conditions) {
    return conditions.length === 1 ? conditions[0] : new Or(conditions[0], createOR(conditions.slice(1)));
  }
}}

{
  let rulesContainComments = false;
}

Rules
  = _ title:Title? _ rules:Rule|.., RuleDelimiter| RuleDelimiter? _ EOF {
    rules.title = title?.trim();
    rules.rulesContainComments = rulesContainComments;
    return rules;
  }

Title "title"
  = "#" _ title:$[^\n\r]+ _ {
    if (title.trim().length) {
      return title.trim();
    }
  }

Comment "comment"
  = "#" comment:$[^\n\r]+ _ {
    if (comment.trim().length) {
      rulesContainComments = true;
      return comment.trim();
    }
  }

RuleDelimiter "rule end"
  = _ ";" _ Comment* _

Rule "rule"
  = Comment* _ condition: Condition? _ ":-" _ effects:Effects {
    return createRule(condition, effects);
  }

Condition "condition"
  = OR

OR "condition"
  = conditions:AND|1.., _ "OR" _| {
    return createOR(conditions);
  }

AND "condition"
  = conditions:NOT|1.., _ "AND" _| {
    return createAND(conditions);
  }

NOT "condition"
  = "NOT" _ "NOT" _ @NOT
  / "NOT" _ variable:Variable {
    return new Not(variable);
  }
  / @Variable

Variable
  = variable:VariableName {
    return new Variable(variable);
  }

Effects
  = @(Question / Item)|.., _ "," _ Comment* _|

Question "question"
  = question:QuestionString "$" variable:VariableName {
    return new Question(question.trim(), variable.trim());
  }

QuestionString "question"
  = $[^\$,;#]+

VariableName "variable name"
  = $([a-zA-Z][a-zA-Z0-9\-\[\]\(\)\{\}_]*)

Item "item"
  = category:Category _ item:ItemNameAndWeight {
    let { name, weight } = item;
    return new Item(category.trim(), name, weight);
  }

Category "category"
  = "[" _ @CategoryName _ "]"

CategoryName "category name"
  = $[^\],;#\[]+

ItemNameAndWeight "item name"
  = words:$WordNotWeight|.., _ | _ weight:Weight &{ return options.trackWeight } {
    const name = words.trim();
    if (!name.length) {
      expected("item name");
    }
    return { name, weight };
   }
  / words:$Word|.., _| {
    const name = words.trim();
    if (!name.length) {
      expected("item name");
    }
    return { name, weight: undefined };
  }

WordNotWeight "word"
  = !(Weight _ (EOF / "," / ";")) @Word

Word
  = $[^ ,;#]+

Weight "weight"
  = num:Number "kg" {
    return num * 1000;
  }
  / @Number ("g")?

Number "number"
  = ([0-9]+) ("."$[0-9]+)? {
    return parseFloat(text());
  }

_ "whitespace"
  = [ \t\n\r]*

EOF
  = !.
