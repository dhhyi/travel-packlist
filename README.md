# TravelPacklist

This app is a tool for creating conditional checklists. I use it for creating a packlist for my travels, depending on the duration, the activities, the expected weather, etc. It should be flexible enough to be used for other purposes as well.

Use the link https://dhhyi.github.io/travel-packlist/

As it is a PWA, you can also install it on your home screen.

## Technology

This app is developed using Angular 18 with the new experimental zoneless change detection strategy. Wherever possible, I used signals do model data flow. This application doesn't use external libraries and just relies on browser API where needed. For styling, I used TailwindCSS (https://tailwindcss.com/). The icons are Google Material Icons (https://fonts.google.com/icons). The flags for the language selection are from https://uxwing.com/united-kingdom-flag-icon/.

## Development

Checkout the repository and install pnpm (npm i -g pnpm). Then run `pnpm install` and `pnpm start` to start the development server. The app will be available at `http://localhost:4200`.
