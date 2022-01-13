import { FakeOptions, fake } from './core';
import { data } from './paragraph.json';

export function paragraph<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
