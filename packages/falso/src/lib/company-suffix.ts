import { FakeOptions, fake } from './core';
import { data } from './company-suffix.json';

export function companySuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
