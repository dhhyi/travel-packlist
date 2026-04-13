import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  Parser,
  Refactor,
  serializeRules,
  serializeCondition,
  ParserConfig,
} from '@travel-packlist/model';
import { Always, Rules } from '@travel-packlist/rules';
import { z } from 'zod';

interface RulesContext {
  readonly refactor: Refactor;
  readonly rules: Rules;
}

function createContext(
  rulesText: string,
  trackWeight: boolean | undefined,
): RulesContext {
  let parserConfig: ParserConfig | undefined;
  if (trackWeight) {
    parserConfig = { isTrackWeight: () => true };
  }
  const parser = new Parser(parserConfig);
  return {
    refactor: new Refactor(parser),
    rules: parser.parseRules(rulesText),
  };
}

export function createMcpServer(options?: {
  log?: (message: string) => void;
}): McpServer {
  const log = options?.log ?? ((msg: string) => console.log(msg));
  let context: RulesContext | undefined;

  function getContext(): RulesContext {
    if (!context) {
      throw new Error('Not initialized. Call load-rules first.');
    }
    return context;
  }

  const server = new McpServer({
    name: 'travel-packlist-rules',
    version: '0.0.0',
  });

  server.registerTool(
    'load-rules',
    {
      description:
        'Load and parse rules text into the session. Must be called before using other tools. Can be called again to replace the loaded rules. Validates the rules and returns a statistical summary and any warnings.',
      inputSchema: {
        rulesText: z
          .string()
          .describe('The rules text to load into the session'),
        trackWeight: z.boolean().optional().describe('Enable weight tracking'),
      },
    },
    async ({ rulesText, trackWeight }) => {
      log('Tool invoked: load-rules');
      try {
        context = createContext(rulesText, trackWeight);
        const { rules, refactor } = getContext();
        const warnings = rules.warnings ?? [];
        const variables = refactor.extractVariables(rules);
        const questions = refactor.extractQuestions(rules);
        const categories = refactor.extractCategories(rules);
        const itemCount = refactor.countItemsAndWeights(rules).items;
        const result = {
          loaded: true,
          summary: {
            rules: rules.length,
            variables: variables.size,
            questions: questions.length,
            items: itemCount,
            categories: categories.length,
            trackWeight: trackWeight ?? false,
          },
          warnings,
        };
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        };
      } catch (error) {
        return {
          content: [{ type: 'text', text: (error as Error).message }],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'format-rules',
    {
      description:
        'Format the loaded rules into canonical form. Returns the formatted rules text. Requires load-rules to be called first.',
      inputSchema: {},
    },
    async () => {
      log('Tool invoked: format-rules');
      try {
        const { rules } = getContext();
        const formatted = serializeRules(rules);
        return { content: [{ type: 'text', text: formatted }] };
      } catch (error) {
        return {
          content: [{ type: 'text', text: (error as Error).message }],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'list-variables',
    {
      description:
        'List all variables defined in the loaded rules, along with their associated question text if they come from a question. Requires load-rules to be called first.',
      inputSchema: {},
    },
    async () => {
      log('Tool invoked: list-variables');
      try {
        const { rules, refactor } = getContext();
        const variables = refactor.extractVariables(rules);
        const questions = refactor.extractQuestions(rules);
        const questionMap = new Map(
          questions.map((q) => [q.variable, q.question]),
        );
        const result = Array.from(variables).map((variable) => ({
          variable,
          question: questionMap.get(variable) ?? null,
        }));
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        };
      } catch (error) {
        return {
          content: [{ type: 'text', text: (error as Error).message }],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'list-items',
    {
      description:
        'List all items defined in the loaded rules, with their category, name, weight, and the condition under which they are active. Requires load-rules to be called first.',
      inputSchema: {},
    },
    async () => {
      log('Tool invoked: list-items');
      try {
        const { rules } = getContext();
        const result = rules.flatMap((rule) =>
          rule.items.map((item) => ({
            category: item.category,
            name: item.name,
            weight: item.weight ?? null,
            condition:
              rule.condition instanceof Always
                ? ''
                : serializeCondition(rule.condition),
          })),
        );
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        };
      } catch (error) {
        return {
          content: [{ type: 'text', text: (error as Error).message }],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'list-items-for-constellation',
    {
      description:
        'List items that are active for a specific set of active variables. Requires load-rules to be called first.',
      inputSchema: {
        variables: z
          .array(z.string())
          .describe(
            'Set of active variables, e.g. ["destination_is_beach", "travel_with_kids"]',
          ),
      },
    },
    async ({ variables }) => {
      log('Tool invoked: list-items-for-constellation');
      try {
        const { rules, refactor } = getContext();
        const model = Array.from(variables).reduce<Record<string, boolean>>(
          (acc, variable) => {
            acc[variable] = true;
            return acc;
          },
          {},
        );
        const activeRules = refactor.filterActive({ model, rules }).rules;
        const result = activeRules.flatMap((rule) =>
          rule.items.map((item) => ({
            category: item.category,
            name: item.name,
            weight: item.weight ?? null,
          })),
        );
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        };
      } catch (error) {
        return {
          content: [{ type: 'text', text: (error as Error).message }],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    'refactor-rename-variable',
    {
      description:
        'Rename a variable throughout the rules. Requires load-rules to be called first.',
      inputSchema: {
        oldName: z.string().describe('The current name of the variable'),
        newName: z.string().describe('The new name for the variable'),
      },
    },
    async ({ oldName, newName }) => {
      log('Tool invoked: refactor-rename-variable');
      try {
        const { rules, refactor } = getContext();
        const updatedRules = refactor.renameVariable(oldName, newName, rules);
        context = { ...getContext(), rules: updatedRules };
        return {
          content: [
            {
              type: 'text',
              text: `Variable renamed from "${oldName}" to "${newName}" successfully.`,
            },
            { type: 'text', text: serializeRules(updatedRules) },
          ],
        };
      } catch (error) {
        return {
          content: [{ type: 'text', text: (error as Error).message }],
          isError: true,
        };
      }
    },
  );

  return server;
}
