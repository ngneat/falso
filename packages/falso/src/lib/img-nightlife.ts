import { FakeOptions, fake } from './core';
import { data } from './img-nightlife.json';

export function imgNightlife<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
