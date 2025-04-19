import { Transformer } from '../transformer.interface';

class GitHubTransformer implements Transformer {
  readonly name = 'GitHub';

  test(url: string): boolean {
    return url.startsWith('https://github.com/');
  }

  transform(url: string): string {
    return url
      .replace('https://github.com/', 'https://raw.githubusercontent.com/')
      .replace('/blob/', '/');
  }
}

export default new GitHubTransformer();
