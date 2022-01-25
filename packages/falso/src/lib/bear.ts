import { FakeOptions, fake } from './core/core';
import { data } from './bear.json';

/**
 * Generate a random bear.
 *
 * @category animals
 *
 * @example
 *
 * randBear()
 *
 * @example
 *
 * randBear({ length: 10 })
 *
 */
export function randBear<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
