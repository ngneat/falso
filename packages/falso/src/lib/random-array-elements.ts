import { FakeOptions, fake } from './core';
import { data } from './random-array-elements.json';

// TODO ?
export function randomArrayElements<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
