import { FakeOptions, fake } from './core/core';
import { data } from './middle-name.json';

// TODO remove?
export function randMiddleName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
