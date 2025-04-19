import { Transformer } from '../transformer.interface';

const googleDriveRegex =
  /https:\/\/drive\.google\.com\/file\/d\/([^/]+)(?:\/.*)?/;

const transformer: Transformer = {
  name: 'Google Drive',
  test: (url) => googleDriveRegex.test(url),
  transform: (url) => {
    const match = googleDriveRegex.exec(url);
    return match
      ? `https://drive.google.com/uc?export=download&id=${match[1]}`
      : url;
  },
};

export default transformer;
