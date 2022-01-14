import { fake, FakeOptions } from './core/core';
import { random } from './random';

/**
 * Generate a random hex.
 *
 * @category TBD
 *
 * @example
 *
 * hex()
 *
 * @example
 *
 * hex({ length: 10 })
 *
 */
export function hex<Options extends FakeOptions>(options?: Options) {
  return fake(() => `#${random().toString(16).substr(2, 6)}`, options);
}
