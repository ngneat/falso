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
 * @example
 *
 * randLines({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randLines<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
