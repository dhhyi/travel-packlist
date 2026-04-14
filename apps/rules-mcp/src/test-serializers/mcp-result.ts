import type { SnapshotSerializer } from 'vitest';

export default {
  test: (val) =>
    typeof val === 'object' &&
    val !== null &&
    'content' in val &&
    !('isError' in val),
  print: (val: unknown, print) => {
    const { content } = val as { content: unknown };
    return print(content);
  },
} satisfies SnapshotSerializer;
