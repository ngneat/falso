import { FakeOptions, fake } from './core';
import { data } from './verb.json';

export function verb<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
