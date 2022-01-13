import { FakeOptions, fake } from './core';
import { data } from './adjective.json';

export function adjective<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
