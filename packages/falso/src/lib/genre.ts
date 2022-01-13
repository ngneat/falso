import { FakeOptions, fake } from './core';
import { data } from './genre.json';

export function genre<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
