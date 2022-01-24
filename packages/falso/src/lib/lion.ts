import { FakeOptions, fake } from './core/core';
import { data } from './lion.json';

/**
 * Generate a random lion.
 *
 * @category animals
 *
 * @example
 *
 * randLion()
 *
 * @example
 *
 * randLion({ length: 10 })
 *
 */
export function randLion<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
