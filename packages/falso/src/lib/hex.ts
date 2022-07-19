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
 *
 * @automaticallyGeneratedExamples
 * @example
 * #2b1df7
 * #64f33f
 * #af3363
 */

export function randHex<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => `#${random().toString(16).substr(2, 6)}`, options);
}
