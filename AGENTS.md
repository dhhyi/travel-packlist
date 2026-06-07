# AGENTS

Repository-wide instructions for AI coding assistants.

## Locale Translation Workflow

Use this workflow when asked to update locale translations.

1. Run locale lint:
   - `cd /workspaces/travel-packlist && pnpm nx lint locale`
2. If lint reports missing keys, run interactive mode:
   - `cd /workspaces/travel-packlist && pnpm nx lint locale --interactive`
3. Enter translations adapted from the English source text.
4. Preserve placeholders and ICU syntax exactly:
   - Examples: `{$ICU}`, `{$START_TAG_BUTTON}`, `{$CLOSE_TAG_BUTTON}`, `{VAR_PLURAL, plural, ...}`
5. Always rerun lint after interactive input:
   - `cd /workspaces/travel-packlist && pnpm nx lint locale`
6. Treat the task as complete only when the final lint run passes.

## German Wording Preference

For item terminology in German, use:

- `Gegenstand` (singular)
- `Gegenstände` (plural)

Do not use `Element` or `Elemente` for these item labels.
