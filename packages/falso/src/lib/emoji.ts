import { FakeOptions, fake } from './core/core';
import { data } from './emoji.json';

/**
 * Generate a random emoji.
 *
 * @category text
 *
 * @example
 *
 * randEmoji()
 *
 * @example
 *
 * randEmoji({ length: 10 })
 *
 * @example
 *
 * randEmoji({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randEmoji<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
