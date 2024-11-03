# TravelPacklist

This app is a tool for creating conditional checklists. I use it for creating a pack list for my travels, depending on the duration, the activities, the expected weather, etc. It should be flexible enough to be used for other purposes as well.

The Rules can be defined in a custom format with either free test or a graphical editor.

Use the link https://dhhyi.github.io/travel-packlist/ to access the app.

As it is a PWA, you can also install it on your home screen.

Data is stored in your browser's local storage and not shared with any server. The app has an export and import feature to backup and restore your data wherever you like.

## Technology

This app is developed using Angular 18 with the new experimental zoneless change detection strategy. Wherever possible, I used signals do model data flow. This application doesn't use external libraries and just relies on browser API where needed. For styling, I used TailwindCSS (https://tailwindcss.com/).

## Resources

- [Google Material Icons](https://fonts.google.com/icons)
- [Flags for the language selection](https://uxwing.com/united-kingdom-flag-icon/)

## Development

Checkout the repository and install pnpm (npm i -g pnpm). Then run `pnpm install` and `pnpm start` to start the development server. The app will be available at `http://localhost:4200`.

## Documentation

- Rules
  - [Rules Format Documentation](./src/doc/documentation.md)
  - [Rules EBNF](./src/app/model/ebnf.md)
- [State Management](./src/app/state/README.md)

## Feature FAQ

### Will there be support for complex logic with brackets in conditions?

> The current format supports only a flat condition structure with `NOT`, `AND`, and `OR`, which are evaluated in this precedence order. To make more elaborate conditions, you should be able to use brackets to structure the logic, right?

Yes, brackets would be a nice feature to have, but it will also complicate the design of the UI, which is already quite complex for users not familiar with boolean logic.

For users with complex logic, be aware that you can use the transitive disabling of rules to structure your logic. Questions always have a variable associated with them, and since questions are only displayed if a condition is met, the variable is transitively also only true if the condition is true. This means that most of the combinations i a complex condition are not possible due to the restriction of the variables themselves.

Imagine the following rule snippet:

```
:- A? $a;
a :- B? $b, C? $c;
```

With this structure, it is implicitly defined that `b` and `c` can only yield true values if `a` is also true. In other words, if `a` is false, `b` and `c` are also false. This is a simple way to structure your logic without the need for brackets.

If that doesn't work for you I recommend converting the condition to [disjunctive normal form (DNF)](https://en.wikipedia.org/wiki/Disjunctive_normal_form) to make it flat. This in turn makes the expression bigger and harder to read, but still implementable with the current restrictions.

### Can I customize the display order of the categories?

> The categories on the pack list are either displayed in alphabetical order or in the order they were defined by the rules. Would it be possible to define a custom order?

Yes, it would totally be possible to add a user interface for defining a custom order, but this functionality will also add more complexity and error cases. What is the behavior if a category is missing in the custom order? What if a category is no longer used? What if a user swaps two pack lists all the time and wants to have a different order of categories for each?
All those considerations leave me at the decision to not implement this feature.

If you want to define a custom order for your categories, you can use a prefix in the category name that is then sorted alphabetically. For example, you can use `1Shelter`, `2Clothing`, `3Hygiene`, etc. This way, you can define the order of the categories by the prefix and you don't have to reorder the rules all the time.

### Will there be a Undo/Redo feature for editing rules?

> The rule editor is quite complex and it is easy to make mistakes. Would it be possible to add an Undo/Redo feature?

The application provides an export and import feature that can be used as a backup mechanism. This way, you can always revert to a previous state of your rules. Adding an Undo/Redo feature would add a lot of complexity to the application and would also require a lot of testing to ensure that it works correctly in all cases. I decided to not implement this feature to keep the application simple and easy to maintain. Please backup your rules regularly to be able to revert to a previous state if needed.