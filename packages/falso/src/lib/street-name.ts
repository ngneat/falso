import { FakeOptions, fake } from './core';
import { data } from './street-name.json';

export function streetName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
