import type { SnapshotSerializer } from 'vitest';

export default {
  test: (val) =>
    typeof val === 'object' &&
    val !== null &&
    'type' in val &&
    'text' in val &&
    (val as { type: unknown }).type === 'text',
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
} satisfies SnapshotSerializer;
