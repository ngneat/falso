import { FakeOptions, fake } from './core/core';

/**
 * Generate a random random-boolean.
 *
 * @category TBD
 *
 * @example
 *
 * randomBoolean()
 *
 * @example
 *
 * randomBoolean({ length: 10 })
 *
 */
export function randomBoolean<Options extends FakeOptions>(options?: Options) {
  return fake([true, false], options);
}
