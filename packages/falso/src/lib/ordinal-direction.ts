import { FakeOptions, fake } from './core';
import { data } from './ordinal-direction.json';

export function ordinalDirection<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
