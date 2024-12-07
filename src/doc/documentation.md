# How to define rules

## Rules

are defined with the following syntax:

```
[Condition] :- Effect, Effect, ... ;
```

Rules have to be separated by a semicolon character.

```
cold_weather :- [Clothing] Coat,
  Do you expect snow? $snow ;
```

> This rule can mean something like "If the weather is cold, you should bring a coat. Also, you should answer the question if you expect snow."

### Effects

can be either **items** or **questions** as seen above.
Separate multiple effects with commas.

### Questions

are defined with the following syntax:

```
Question? $variable
```

A question will be displayed on top of the pack list UI.
You can toggle the answer by clicking on it.

### Items

are defined with the following syntax:

```
[Category] Name
```

An item will be displayed in the list under its category.

### Conditions

can be empty, in which case they are always true.
You can use variables for defining logic with `AND`, `OR`, and `NOT`.

> The highest precedence is `NOT`, then `AND`, and finally `OR`. This means all groups of `NOT variable` are evaluated first, then `left AND right` and finally `left OR right` until the whole condition is evaluated.

Variables are defined in questions.
Conditions trigger the effects of the rule if they are true.
So if the condition is not met, then you will neither see any additional questions nor items of that specific rule.

Some examples for conditions:

```
cold_weather AND NOT snow
```

> Can mean something like "The weather is cold and it is not snowing".

```
washer OR laundromat
```

> Can mean something like "You have a washer in your AirBnB or you have a laundromat nearby".

## Conclusion

With all of this you can define a conditional checklist very flexible.

One advice:
Don't trigger too many effects in one rule.
It can get confusing.
