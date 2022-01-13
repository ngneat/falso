import { FakeOptions, fake } from './core';
import { data } from './company-name.json';

export function companyName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
