import { FakeOptions, fake } from './core';
import { data } from './email.json';

// TODO - generate programmatically using firstName and suffix
export function email<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
