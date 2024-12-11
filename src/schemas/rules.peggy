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
  = _ @Rule|.., RuleDelimiter| RuleDelimiter? _ EOF

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
  = words:WordNotWeight|.., _ | _ weight:Weight {
    if (!words.length) {
      expected("item name");
    }
    if (typeof weight === "string") {
      return { name: words.concat(weight).join(" "), weight: undefined };
    }
    return { name: words.join(" "), weight };
   }
  / words:Word|.., _| {
    if (!words.length) {
      expected("item name");
    }
    return { name: words.join(" "), weight: undefined };
  }

WordNotWeight "word"
  = !(Weight _ (EOF / "," / ";")) @Word

Word
  = $[^ ,;#]+

Weight "weight"
  = num:Number "kg" {
    return options.trackWeight ? num * 1000 : text();
  }
  / num:Number ("g")? {
    return options.trackWeight ? num : text();
  }

Number "number"
  = ([0-9]+) ("."$[0-9]+)? {
    return options.trackWeight ? parseFloat(text()) : text();
  }

_ "whitespace"
  = [ \t\n\r]*

EOF
  = !.
