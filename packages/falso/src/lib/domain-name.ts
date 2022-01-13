import { FakeOptions, fake } from './core';
import { data } from './domain-name.json';

export function domainName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
