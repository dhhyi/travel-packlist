import { Transformer } from '../transformer.interface';

const transformer: Transformer = {
  name: 'Pastebin',
  needsCORS: true,
  test: (url) =>
    url.startsWith('https://pastebin.com/') && !url.includes('/raw/'),

  transform: (url) =>
    url.replace('https://pastebin.com/', 'https://pastebin.com/raw/'),
};

export default transformer;
