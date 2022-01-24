import { FakeOptions, fake } from './core/core';
import { data } from './lines.json';

/**
 * Generate a random lines.
 *
 * @category text
 *
 * @example
 *
 * randLines()
 *
 * @example
 *
 * randLines({ length: 10 })
 *
 */
export function randLines<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
