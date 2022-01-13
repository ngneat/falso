import { FakeOptions, fake } from './core';
import { data } from './street-suffix.json';

export function streetSuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
