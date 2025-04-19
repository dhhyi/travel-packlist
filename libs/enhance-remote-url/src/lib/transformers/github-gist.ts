import { Transformer } from '../transformer.interface';

const gistRegex =
  /https:\/\/gist\.github\.com\/([^/]+)\/([a-z0-9]{32})(#file-)?([\w-]+)?/;

export default {
  name: 'GitHub Gist',
  test: (url) => gistRegex.test(url),
  transform: (url: string) => {
    const match = gistRegex.exec(url);
    if (!match) {
      return url;
    }
    const [, user, gistId, , file] = match;
    if (file) {
      return `https://gist.githubusercontent.com/${user}/${gistId}/raw/${file}`;
    }
    return `https://gist.githubusercontent.com/${user}/${gistId}/raw`;
  },
} as Transformer;
