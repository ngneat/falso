import { FakeOptions, fake } from './core';
import { data } from './cetacean.json';

export function cetacean<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
