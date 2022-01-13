import { FakeOptions, fake } from './core';
import { data } from './street-prefix.json';

// TODO
export function streetPrefix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
