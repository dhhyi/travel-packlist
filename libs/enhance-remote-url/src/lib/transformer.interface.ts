export interface Transformer {
  name: string;
  test: (url: string) => boolean;
  transform: (url: string) => string;
}
