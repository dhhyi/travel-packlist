{{
  import { Question, Rule, Item, Variable, Always, Not, And, Or } from "../model/types";

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

Rules
  = _ @Rule|.., RuleDelimiter| RuleDelimiter? _ !.

RuleDelimiter "rule end"
  = _ ";" _

Rule "rule"
  = condition: Condition? _ ":-" _ effects:Effects {
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
  = @(Question / Item)|.., _ "," _|

Question "question"
  = question:QuestionString "$" variable:VariableName {
    return new Question(question.trim(), variable.trim());
  }

QuestionString "question"
  = $[^\$,\;]+

VariableName "variable name"
  = $([a-zA-Z][a-zA-Z0-9\-\[\]\(\)\{\}_]*)

Item "item"
  = category:Category _ item:ItemNameAndWeight {
    let name
    let weight
    if (typeof item[1] === "number") {
      name = item[0].join(" ").trim();
      weight = item[1];
    } else {
      name = [...item[0], item[1]].join(" ").trim();
    }
    if (!name) {
      expected("item with name");
    }
    return new Item(category.trim(), name, weight);
  }

Category "category"
  = "[" _ @CategoryName _ "]"

CategoryName "category name"
  = $[^\]]+

ItemNameAndWeight "item name"
  = @Word|{
    // end is the end of the last context
    const begin = input.substring(range().end);
    // calculate count to match the last word into weight
    const slice = begin.replaceAll(/[,;].*/gs, "").trim();
    return slice.split(" ").length - 1;
   }, " "| " " @Weight
  / words:Word|.., " "| { return [words]; }

Word
  = $[^ \n,;]+

Weight "weight"
  = num:Number "kg" {
    return options.trackWeight ? num * 1000 : text();
  }
  / @Number ("g")?

Number "number"
  = ([0-9]+) ("."$[0-9]+)? {
    return options.trackWeight ? parseFloat(text()) : text();
  }

_ "whitespace"
  = [ \t\n\r]*
