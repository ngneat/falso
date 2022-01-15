import { FakeOptions, fake } from './core/core';
import { rand } from './rand';

/**
 * Generate a random boolean.
 *
 * @category General
 *
 * @example
 *
 * randBoolean()
 *
 * @example
 *
 * randBoolean({ length: 10 })
 *
 */
export function randBoolean<Options extends FakeOptions>(options?: Options) {
  return fake(() => rand([true, false]), options);
}
