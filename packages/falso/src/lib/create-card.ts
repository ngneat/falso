import { fake, FakeOptions } from './core';
import { data } from './create-card.json';

// TODO not sure what type of data this is
export function createCard<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
