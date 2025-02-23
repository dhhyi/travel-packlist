<!-- markdownlint-disable -->
<!-- spellchecker:disable -->
<h1>TravelPacklist
  <a href="./README.md">
    <img
      src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.svg"
      alt="English"
      style="width: 24px;">
  </a>
  <a href="./README.de.md">
    <img
      src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/germany-flag-icon.svg"
      alt="German"
      style="width: 24px;">
  </a>
</h1>
<!-- spellchecker:enable -->
<!-- markdownlint-enable -->

This app is a tool for creating conditional checklists.
I use it for creating a pack list for my travels, depending on the duration, the activities, the expected weather, etc.
It should be flexible enough to be used for other purposes as well.

Custom rules can be defined either with free text in a [specific grammar](./libs/documentation/src/doc/rules-documentation.md) or a graphical editor.

Use [this link](https://dhhyi.github.io/travel-packlist/) to access the app deployed on GitHub Pages.

As it is a PWA, you can also install it on your home screen for easy access.
There is also an Android App available in the Play Store, which is currently in testing and not yet publicly available.
However, you can [become a tester](mailto:danilo.hoffmann1+travel-packlist@googlemail.com?subject=Requesting%20Access%20to%20TravelPacklist%20Testing&body=Hi,%0A%0AI%20would%20like%20to%20get%20access%20to%20the%20Testing%20version%20of%20TravelPacklist.%0A%0AMy%20Google%20Account%20EMail%20for%20my%20Android%20Phone%20is:).

Data is stored in your browser's local storage and not shared with any server.
The app has an export and import feature to backup and restore your data wherever you like.
Read more on this in the [privacy policy](./PRIVACY_POLICY.md).

<!-- markdownlint-disable-next-line no-inline-html -->
<h2 id="toc">Table of Contents</h2>

- [Technology](#technology)
  - [Multiple Languages](#multiple-languages)
- [Resources](#resources)
- [Development](#development)
  - [Development with Devcontainer](#development-with-devcontainer)
- [Feature FAQ](#feature-faq)
  - [Will there be support for complex logic with brackets in conditions?](#will-there-be-support-for-complex-logic-with-brackets-in-conditions)
  - [Can I customize the display order of the categories?](#can-i-customize-the-display-order-of-the-categories)
  - [Will there be an Undo/Redo feature for editing rules?](#will-there-be-an-undoredo-feature-for-editing-rules)
- [More Documentation](#more-documentation)

## Technology

This app is developed using [Angular 19](https://angular.dev/) with the new experimental zoneless change detection strategy.
Wherever possible, I used signals to model data flow.

The project uses [Nx](https://nx.dev/) for managing the monorepo and the build process.

Managing the rules grammar and parsing it is done using [Peggy](https://peggyjs.org/).

[Showdown](https://showdownjs.com/) is used in a build step for converting the syntax documentation for the rule format from markdown to HTML.

For packaging the app into an Android bundle, I use [Capacitor](https://capacitorjs.com/).

For styling, I use [TailwindCSS](https://tailwindcss.com/).
The design system is implemented using [Storybook](https://storybook.js.org/).
It is deployed [here](https://dhhyi.github.io/travel-packlist/index.design.html).

### Multiple Languages

The app is available in multiple languages (English and German at the moment).
The language can be selected in the settings.

The Angular build process is set up to build all languages and deploy them to the same location.
The language switching is done by navigating to a different index.html.
The build process merges the different localized Angular apps into the same folder.

## Resources

<!-- cSpell:words uxwing -->

- [Google Material Icons](https://fonts.google.com/icons)
- Flags for the language selection from [uxwing.com](https://uxwing.com)

## Development

Checkout the repository and install pnpm (`npm i -g pnpm`).

Then run `pnpm install` and `pnpm dev` to start the development server.
The app will be available at `http://localhost:4200`.

To build the app with multiple languages and service worker, run `pnpm build`.
You can also use `pnpm start` instead to build and start a local server.
The app will be available at `http://localhost:8080`.

The design system can be previewed with `pnpm design` and is available at `http://localhost:4444`.

### Development with Devcontainer

Provided you have Docker installed, I recommend using VSCode with the included devcontainer for development.
Simply open the workspace in VSCode and (you probably will be prompted to) re-open the workspace in the devcontainer.
This will set up a development environment with all necessary tools and extensions installed.

## Feature FAQ

### Will there be support for complex logic with brackets in conditions?

> The current format supports only a flat condition structure with `NOT`, `AND`, and `OR`, which are evaluated in this precedence order.
> To make more elaborate conditions, you should be able to use brackets to structure the logic, right?

Yes, brackets would be a nice feature to have, but it will also complicate the design of the UI, which is already quite complex for users not familiar with boolean logic.

For users with complex logic, be aware that you can use the transitive disabling of rules to structure your logic.
Questions always have a variable associated with them.
Since questions are only displayed if a condition is met, the variable is transitively also only true if the condition is true.
This means that most of the combinations in a complex condition are not possible due to the restriction of the variables themselves.

Imagine the following rule snippet:

```text
:- Will it be cold? $cold;
cold :- Bring gloves? $gloves, Bring warm drink in thermos? $thermos;
```

With this structure, it is implicitly defined that `gloves` and `thermos` can only yield true values if `cold` is also true.
In other words, if `cold` is false, `gloves` and `thermos` are also false because the user will not see the questions associated with those variables.
This is a simple way to structure your complex logic without the need for brackets.

If that doesn't work for you, I recommend converting the condition to [disjunctive normal form (DNF)](https://en.wikipedia.org/wiki/Disjunctive_normal_form) to make it flat.
This in turn makes the expression bigger and harder to read, but still implementable with the current restrictions.

### Can I customize the display order of the categories?

> The categories on the pack list are either displayed in alphabetical order or in the order they were defined by the rules.
> Would it be possible to define a custom order?

Yes, it would totally be possible to add a user interface for defining a custom order, but this functionality will also add more complexity and error cases.
What is the behavior if a category is missing in the custom order?
What if a category is no longer used?
What if a user swaps two pack lists all the time and wants to have a different order of categories for each?
All those considerations leave me at the decision to not implement this feature.

If you want to define a custom order for your categories, you can use a prefix in the category name that is then sorted alphabetically.
For example, you can use `1Shelter`, `2Clothing`, `3Hygiene`, etc.
This way, you can define the order of the categories by the prefix and you don't have to reorder the rules all the time.

### Will there be an Undo/Redo feature for editing rules?

> The rule editor is quite complex and it is easy to make mistakes.
> Would it be possible to add an Undo/Redo feature?

The application provides an export and import feature that can be used as a backup mechanism.
This way, you can always revert to a previous state of your rules.
Adding an Undo/Redo feature would add a lot of complexity to the application and would also require a lot of testing to ensure that it works correctly in all cases.
I decided to not implement this feature to keep the application simple and easy to maintain.
Please backup your rules regularly to be able to revert to a previous state if needed.

## More Documentation

- [Data Model](./libs/model/README.md)
- [State Management](./libs/state/README.md)
- [E2E Testing](./apps/travel-packlist-e2e/README.md)
