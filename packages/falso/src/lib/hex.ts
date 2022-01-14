import { fake, FakeOptions } from './core';
import { random } from './random';

export function hex<Options extends FakeOptions>(options?: Options) {
  return fake(() => `#${random().toString(16).substr(2, 6)}`, options);
}
