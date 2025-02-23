# Data Model

The app uses a custom data model for representing the rules to create conditional checklists.
Each rule is bound to a certain condition which activates items for the packlist and questions for activation of other rules.
More on this can be found in the [rules documentation](./../documentation/src/doc/rules-documentation.md).

When creating the application, I decided to use a text base format for storing those rules.
This also means, that the data entered in the UI is repeatedly parsed and serialized from a string representation to an object graph and vice versa.

## Parsing

After writing everything from scratch in the beginning, I decided to use a parser generator to create a more robust and maintainable solution.
I chose [Peggy](https://peggyjs.org/) for this task.
The grammar for the rules can be found [here](./src/schemas/rules.peggy).

## Development

For developing on the data model, it is useful to run the following two commands in parallel:

```bash
nx run model:generate --watch
nx run model:test --watch
```
