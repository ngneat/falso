import { fake, FakeOptions } from './core/core';
import { random } from './random';

/**
 * Generate a random hex.
 *
 * @category colors
 *
 * @example
 *
 * randHex()
 *
 * @example
 *
 * randHex({ length: 10 })
 *
 * @example
 *
 * randHex({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randHex<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => `#${random().toString(16).substr(2, 6)}`, options);
}
