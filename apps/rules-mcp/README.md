# rules-mcp

MCP server exposing the travel-packlist rules DSL as tools over HTTP.

## Tools

- **load-rules** — Load and parse rules text into the session; returns a summary and any warnings. Must be called before other tools.
- **format-rules** — Format the loaded rules into canonical form.
- **list-variables** — List all variables with their associated questions.
- **list-items** — List all items with category, name, weight, and the condition under which they are active.
- **list-items-for-constellation** — List active items for a given set of variable assignments.
- **refactor-rename-variable** — Rename a variable throughout the loaded rules and return the updated, serialized rules.

## Usage

```bash
nx serve rules-mcp
```

The server listens on `http://localhost:3100/mcp` (override with `PORT` env var).

## VS Code Integration

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "rules-mcp": {
      "type": "http",
      "url": "http://localhost:3100/mcp"
    }
  }
}
```

The tools will then be available in Copilot Chat via `#` tool references (e.g. `#format-rules`).
