import transformer from './pastebin';

describe('pastebin Transformer', () => {
  const positives = [
    ['https://pastebin.com/abc123', 'https://pastebin.com/raw/abc123'],
  ];

  const negatives = [
    'https://pastebin.com/raw/abc123',
    'https://example.com/abc123',
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
