import { fake, FakeOptions } from './core';

export function hex<Options extends FakeOptions>(options?: Options) {
  return fake(() => `#${Math.random().toString(16).substr(2, 6)}`, options);
}
