import type { SnapshotSerializer } from 'vitest';

export default {
  test: (val) => Array.isArray(val) && val.length === 1,
  print: (val: unknown, print) => {
    const array = val as unknown[];
    return print(array[0]);
  },
} satisfies SnapshotSerializer;
