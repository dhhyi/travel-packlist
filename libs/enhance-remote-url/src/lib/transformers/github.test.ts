import transformer from './github';

describe('gitHub Transformer', () => {
  const positives = [
    [
      'https://github.com/user/repo/blob/main/file.txt',
      'https://raw.githubusercontent.com/user/repo/main/file.txt',
    ],
  ];

  const negatives = [
    'https://gitlab.com/user/repo/blob/main/file.txt',
    'https://gist.github.com/user/repo/blob/main/file.txt',
    'https://raw.githubusercontent.com/user/repo/main/file.txt',
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
