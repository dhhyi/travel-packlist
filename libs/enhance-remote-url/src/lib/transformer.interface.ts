export interface Transformer {
  name: string;
  needsCORS?: true;
  test: (url: string) => boolean;
  transform: (url: string) => string;
}
