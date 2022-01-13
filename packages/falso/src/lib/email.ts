import { FakeOptions, fake } from './core';
import { data } from './email.json';

export function email<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
