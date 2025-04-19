import transformer from './google-drive';

describe('pastebin Transformer', () => {
  const positives = [
    [
      'https://drive.google.com/file/d/1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T/view?usp=sharing',
      'https://drive.google.com/uc?export=download&id=1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T',
    ],
    [
      'https://drive.google.com/file/d/1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T/edit',
      'https://drive.google.com/uc?export=download&id=1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T',
    ],
  ];

  const negatives = [
    'https://drive.google.com/drive/folders/17lItE_n0cKVmIXCCis039CaYgrsi-Cx5',
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
