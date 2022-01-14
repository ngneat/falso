import { fake, FakeOptions } from './core/core';
import { data } from './create-card.json';

// TODO - generate programmatically
export function createCard<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
