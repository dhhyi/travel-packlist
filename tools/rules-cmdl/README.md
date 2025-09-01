# Rules Command Line Tool

This project contains a command line tool for validating and formatting TravelPacklist rules.

## Usage

Node.js is required to run the tool.
You can install it from [nodejs.org](https://nodejs.org/).

Download the script from [its deployment branch](https://raw.githubusercontent.com/dhhyi/travel-packlist/refs/heads/rules-cmdl/index.cjs).
And run it using Node.js:

```bash
node index.cjs --format <file>
```

Use `--help` to see all available options.

You can also run the script directly on a unix-like shell with curl:

```bash
curl -sSL https://raw.githubusercontent.com/dhhyi/travel-packlist/refs/heads/rules-cmdl/index.cjs | node - --format <file>
```

## Usage in CI

You can use the tool in your CI pipeline to validate and format rules files.
You can find an example [in my own rules](https://github.com/dhhyi/travel-packlist-rules/blob/main/.github/workflows/pipeline.yaml).
