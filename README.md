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
