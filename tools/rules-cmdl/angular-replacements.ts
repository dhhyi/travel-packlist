export function inject() {
  return undefined;
}

export class InjectionToken {
  constructor(public description: string) {}
}

export interface InjectableDecorator {
  (): undefined;
  (providedIn: 'root' | null): undefined;
}

export const Injectable: InjectableDecorator = () => undefined;
