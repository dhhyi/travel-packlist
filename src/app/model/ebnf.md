# Model EBNF

```ebnf

Rules = Rule, {(";", Rule)}, [";"]

Rule = [Condition] :- Effect, {(",", Effect)}

Effect = Item | Question

Item = "[", CategoryName, "]", ItemName

CategoryName = StringWithoutSpaces

ItemName = StringWithoutSpaces

Question = QuestionString, "?", VariableDeclaration

QuestionString = String

VariableDeclaration = "$", VariableName

Condition = VariableName | "NOT", VariableName | Condition, "AND", Condition | Condition, "OR", Condition

```
