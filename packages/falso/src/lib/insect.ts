import { FakeOptions, fake } from './core';
import { data } from './insect.json';

export function insect<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
