import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';

import { createMcpServer } from './mcp-server';

// Rules with:
//   - 1 question/variable: beach
//   - 3 rules: unconditional (Swimsuit), conditional on beach (Sunscreen + Sunglasses), unconditional (T-shirt)
//   - 4 items total across 2 categories
const BEACH_RULES = `
  :- Are you going to the beach? $beach, [Clothing] Swimsuit;
  beach :- [Beach Gear] Sunscreen, [Beach Gear] Sunglasses;
  :- [Clothing] T-shirt;
`;

// Minimal replacement rules: 1 rule, 1 variable, 1 item, 1 category
const WINTER_RULES = `
  :- Do you need a jacket? $cold, [Clothing] Jacket;
`;

describe('rules-mcp server', () => {
  let client: Client;

  beforeEach(async () => {
    const server = createMcpServer({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      log: () => {},
    });
    const [serverTransport, clientTransport] =
      InMemoryTransport.createLinkedPair();
    await server.connect(serverTransport);
    client = new Client({ name: 'test-client', version: '0.0.0' });
    await client.connect(clientTransport);
  });

  afterEach(async () => {
    await client.close();
  });

  beforeEach(() => {
    expect.addSnapshotSerializer({
      test: (val) =>
        typeof val === 'object' &&
        val !== null &&
        'content' in val &&
        !('isError' in val),
      print: (val: unknown, print) => {
        const { content } = val as { content: unknown };
        return print(content);
      },
    });
    expect.addSnapshotSerializer({
      test: (val) =>
        typeof val === 'object' &&
        val !== null &&
        'type' in val &&
        'text' in val &&
        val.type === 'text',
      print: (val: unknown, print, indent) => {
        const { text } = val as { text: string };
        let parsed;
        try {
          parsed = JSON.parse(text);
        } catch {
          parsed = text.replaceAll(/\n\s*/gm, ' ').trim();
        }
        return 'text:\n' + indent(print(parsed));
      },
    });
    expect.addSnapshotSerializer({
      test: (val) => Array.isArray(val) && val.length === 1,
      print: (val: unknown, print) => {
        const array = val as unknown[];
        return print(array[0]);
      },
    });
  });

  describe('load-rules', () => {
    it('returns a summary with correct counts after loading rules', async () => {
      const result = await client.callTool({
        name: 'load-rules',
        arguments: { rulesText: BEACH_RULES },
      });
      expect(result).toMatchInlineSnapshot(`
        text:
          {
            "loaded": true,
            "summary": {
              "categories": 2,
              "items": 4,
              "questions": 1,
              "rules": 3,
              "trackWeight": false,
              "variables": 1,
            },
            "warnings": [],
          }
      `);
    });

    it('calling load-rules a second time overwrites the session context', async () => {
      // First load: 3 rules, 1 variable, 4 items
      const first = await client.callTool({
        name: 'load-rules',
        arguments: { rulesText: BEACH_RULES },
      });
      expect(first).toMatchInlineSnapshot(`
        text:
          {
            "loaded": true,
            "summary": {
              "categories": 2,
              "items": 4,
              "questions": 1,
              "rules": 3,
              "trackWeight": false,
              "variables": 1,
            },
            "warnings": [],
          }
      `);

      // Second load with different rules: 1 rule, 1 variable, 1 item
      const second = await client.callTool({
        name: 'load-rules',
        arguments: { rulesText: WINTER_RULES },
      });
      expect(second).toMatchInlineSnapshot(`
        text:
          {
            "loaded": true,
            "summary": {
              "categories": 1,
              "items": 1,
              "questions": 1,
              "rules": 1,
              "trackWeight": false,
              "variables": 1,
            },
            "warnings": {
              "type": "unused",
              "variable": "cold",
            },
          }
      `);
    });
  });

  describe('list-variables', () => {
    it('returns variables with question text after loading rules', async () => {
      await client.callTool({
        name: 'load-rules',
        arguments: { rulesText: BEACH_RULES },
      });
      const result = await client.callTool({
        name: 'list-variables',
        arguments: {},
      });
      expect(result).toMatchInlineSnapshot(`
        text:
          {
            "question": "Are you going to the beach?",
            "variable": "beach",
          }
      `);
    });
  });

  describe('list-items', () => {
    it('returns all items with category, name, and condition', async () => {
      await client.callTool({
        name: 'load-rules',
        arguments: { rulesText: BEACH_RULES },
      });
      const result = await client.callTool({
        name: 'list-items',
        arguments: {},
      });
      expect(result).toMatchInlineSnapshot(`
        text:
          [
            {
              "category": "Clothing",
              "condition": "",
              "name": "Swimsuit",
              "weight": null,
            },
            {
              "category": "Beach Gear",
              "condition": "beach",
              "name": "Sunscreen",
              "weight": null,
            },
            {
              "category": "Beach Gear",
              "condition": "beach",
              "name": "Sunglasses",
              "weight": null,
            },
            {
              "category": "Clothing",
              "condition": "",
              "name": "T-shirt",
              "weight": null,
            },
          ]
      `);
    });
  });

  describe('list-items-for-constellation', () => {
    it('returns only items active for the given variable set', async () => {
      await client.callTool({
        name: 'load-rules',
        arguments: { rulesText: BEACH_RULES },
      });

      // With beach active: all 4 items
      const withBeach = await client.callTool({
        name: 'list-items-for-constellation',
        arguments: { variables: ['beach'] },
      });
      expect(withBeach).toMatchInlineSnapshot(`
        text:
          [
            {
              "category": "Clothing",
              "name": "Swimsuit",
              "weight": null,
            },
            {
              "category": "Beach Gear",
              "name": "Sunscreen",
              "weight": null,
            },
            {
              "category": "Beach Gear",
              "name": "Sunglasses",
              "weight": null,
            },
            {
              "category": "Clothing",
              "name": "T-shirt",
              "weight": null,
            },
          ]
      `);

      // Without beach: only unconditional items (2)
      const withoutBeach = await client.callTool({
        name: 'list-items-for-constellation',
        arguments: { variables: [] },
      });
      expect(withoutBeach).toMatchInlineSnapshot(`
        text:
          [
            {
              "category": "Clothing",
              "name": "Swimsuit",
              "weight": null,
            },
            {
              "category": "Clothing",
              "name": "T-shirt",
              "weight": null,
            },
          ]
      `);
    });
  });

  describe('refactor-rename-variable', () => {
    it('renames a variable across rules and updates conditions accordingly', async () => {
      await client.callTool({
        name: 'load-rules',
        arguments: { rulesText: BEACH_RULES },
      });

      const renameResult = await client.callTool({
        name: 'refactor-rename-variable',
        arguments: { oldName: 'beach', newName: 'destination_is_beach' },
      });
      expect(renameResult).toMatchInlineSnapshot(`
        [
          text:
            "Variable renamed from "beach" to "destination_is_beach" successfully.",
          text:
            ":- Are you going to the beach? $destination_is_beach, [Clothing] Swimsuit; destination_is_beach :- [Beach Gear] Sunscreen, [Beach Gear] Sunglasses; :- [Clothing] T-shirt;",
        ]
      `);

      // Verify that the variable is renamed in the list-variables output
      const variablesResult = await client.callTool({
        name: 'list-variables',
        arguments: {},
      });
      expect(variablesResult).toMatchInlineSnapshot(`
        text:
          {
            "question": "Are you going to the beach?",
            "variable": "destination_is_beach",
          }
      `);
    });
  });
});
