import { FakeOptions, fake } from './core';
import { data } from './middle-name.json';

// TODO remove?
export function middleName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
