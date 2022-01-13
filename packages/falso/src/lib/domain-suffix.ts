import { FakeOptions, fake } from './core';
import { data } from './domain-suffix.json';

export function domainSuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
