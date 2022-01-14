import { FakeOptions, fake } from './core/core';
import { data } from './domain-name.json';

// TODO - generate programmatically use string and domain suffix
export function domainName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
