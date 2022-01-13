import { FakeOptions, fake } from './core';
import { data } from './random-array-element.json';

// TODO ?
export function randomArrayElement<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
