import { FakeOptions, fake } from './core';
import { data } from './bird.json';

export function bird<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
