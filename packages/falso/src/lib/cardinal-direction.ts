import { FakeOptions, fake } from './core';
import { data } from './cardinal-direction.json';

export function cardinalDirection<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
