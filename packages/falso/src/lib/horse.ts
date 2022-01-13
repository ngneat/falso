import { FakeOptions, fake } from './core';
import { data } from './horse.json';

export function horse<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
