import { FakeOptions, fake } from './core';
import { data } from './iban.json';

// TODO - generate programmatically
export function iban<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
