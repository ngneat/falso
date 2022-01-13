import { FakeOptions, fake } from './core';
import { data } from './ip.json';

export function ip<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
