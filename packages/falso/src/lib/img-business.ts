import { FakeOptions, fake } from './core';
import { data } from './img-business.json';

export function imgBusiness<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
