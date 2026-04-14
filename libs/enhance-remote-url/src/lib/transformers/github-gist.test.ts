import transformer from './github-gist';

describe('gitHub Gist Transformer', () => {
  const positives = [
    [
      'https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20',
      'https://gist.githubusercontent.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20/raw',
    ],
    [
      'https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20#file-simple',
      'https://gist.githubusercontent.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20/raw/simple',
    ],
  ];

  const negatives = [
    'https://gitlab.com/user/repo/blob/main/file.txt',
    'https://gist.github.com/user/repo/blob/main/file.txt',
    'https://gist.githubusercontent.com/user/123123123123123123/raw',
  ];

  it.each(positives)('should test positive on %s', (url) => {
    expect(transformer.test(url)).toBe(true);
  });

  it.each(negatives)('should test negative on %s', (url) => {
    expect(transformer.test(url)).toBe(false);
  });

  it.each(positives)('should transform %s to %s', (url, expected) => {
    expect(transformer.transform(url)).toBe(expected);
  });
});
