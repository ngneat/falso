import { FakeOptions, fake } from './core';
import { data } from './img.json';

export function img<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
