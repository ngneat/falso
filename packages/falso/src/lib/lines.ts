import { FakeOptions, fake } from './core';
import { data } from './lines.json';

export function lines<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
