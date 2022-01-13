import { FakeOptions, fake } from './core';
import { data } from './domain-word.json';

export function domainWord<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
