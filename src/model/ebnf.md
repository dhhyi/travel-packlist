# Model EBNF

```ebnf

Rules = Rule, {(";", Rule)}, [";"]

Rule = [Condition] :- Effect, {(",", Effect)}

Effect = Item | Question

Item = "[", CategoryName, "]", ItemName

CategoryName = StringWithoutSpaces

ItemName = StringWithoutSpaces

Question = QuestionString, "?", VariableDeclaration

QuwstionString = String

VariableDeclaration = "$", VariableName, "(", BooleanDefaultValue, ")"

BooleanDefaultValue = "true" | "false"

Condition = VariableName | "(", Condition, ")" | "NOT", VariableName | Condition, "AND", Condition | Condition, "OR", Condition

```
