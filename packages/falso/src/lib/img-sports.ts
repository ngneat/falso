import { FakeOptions, fake } from './core';
import { data } from './img-sports.json';

export function imgSports<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
