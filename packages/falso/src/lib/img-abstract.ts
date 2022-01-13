import { FakeOptions, fake } from './core';
import { data } from './img-abstract.json';

export function imgAbstract<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
