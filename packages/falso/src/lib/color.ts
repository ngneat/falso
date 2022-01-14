import { FakeOptions, fake } from './core/core';
import { hex } from './hex';

/**
 * Generate a random color.
 *
 * @category TBD
 *
 * @example
 *
 * color()
 *
 * @example
 *
 * color({ length: 10 })
 *
 */
export function color<Options extends FakeOptions>(options?: Options) {
  return fake(() => hex(), options);
}
