import { FakeOptions, fake } from './core';
import { data } from './iban.json';

export function iban<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
