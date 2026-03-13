import { firstValueFrom, toArray } from 'rxjs';

import { stagger } from './stagger';

describe('stagger', () => {
  const equals = (a: string, b: string) => a === b;

  async function doStagger(previous: string[], current: string[]) {
    return await firstValueFrom(
      stagger(previous, current, equals).pipe(toArray()),
    );
  }

  beforeEach(() => {
    expect.addSnapshotSerializer({
      test: (value) => Array.isArray(value) && value.every(Array.isArray),
      print: (value) =>
        (value as unknown[][]).map((arr) => arr.toString()).join(' -> '),
    });
  });

  it('should emit added items first, then removed items, then complete', async () => {
    await expect(
      doStagger(['A', 'B'], ['B', 'C']),
    ).resolves.toMatchInlineSnapshot(`A,B,C -> B,C`);
  });

  it('should emit only added items if there are no removed items', async () => {
    await expect(
      doStagger(['A', 'B'], ['A', 'B', 'C']),
    ).resolves.toMatchInlineSnapshot(`A,B,C`);
  });

  it('should emit only removed items if there are no added items', async () => {
    await expect(
      doStagger(['A', 'B', 'C'], ['A', 'B']),
    ).resolves.toMatchInlineSnapshot(`A,B`);
  });

  it('should preserve order of items (1)', async () => {
    await expect(
      doStagger(['A', 'B', 'D'], ['B', 'C', 'D']),
    ).resolves.toMatchInlineSnapshot(`A,B,C,D -> B,C,D`);
  });

  it('should preserve order of items (2)', async () => {
    await expect(
      doStagger(['A', 'B', 'D', 'E'], ['B', 'C', 'D', 'F']),
    ).resolves.toMatchInlineSnapshot(`A,B,C,D,E,F -> B,C,D,F`);
  });

  it('should emit current if there are no changes', async () => {
    await expect(
      doStagger(['A', 'B'], ['A', 'B']),
    ).resolves.toMatchInlineSnapshot(`A,B`);
  });
});
