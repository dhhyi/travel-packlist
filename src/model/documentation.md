# How to define rules

## Comments

start with the `#` character and can be placed anywhere in the file. Code after a `#` will be ignored.

```
# This is a comment
```

## Rules

are defined with the following syntax:

```
Condition :- Effects ;
```

Rules have to be separated by a semicolon character.

One example for a rule could be:

```
cold_weather :- [Clothing] Coat,
  Do you expect snow? $snow ;
```

Means something like "If it is cold weather, you should bring a coat. Also, you should answer the question if you expect snow."

### Effects

can be either **questions** or **items** as seen above.
Separate multiple effects with a comma.

### Questions

are defined with the following syntax:

```
Question? $variable
```

A question will be displayed on top of the list.
You can toggle the answer by clicking on it.

### Items

are defined with the following syntax:

```
[Category] Name
```

An item will be displayed in the list under its category.

### Conditions

can be empty, in which case they are always true.
You can use variables for defining logic with AND, OR, and NOT.
Variables are defined in questions.
Conditions trigger the effects of the rule if they are true. So if the condition is not met, then you will neither see any addition questons nor items of that specific rule.

Some examples for conditions:

```
cold_weather AND NOT snow
```

Means something like "It is cold weather and it is not snowing".

```
washer OR laundromat
```

Means something like "You have a washer in your AirBnB or you have a laundromat nearby".

## Conclusion

With all of this you can define a conditional checklist very flexible.

One advice:
Don't trigger too many effects in one rule. It can get confusing.
