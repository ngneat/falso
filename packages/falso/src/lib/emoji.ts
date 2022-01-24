import { FakeOptions, fake } from './core/core';
import { data } from './emoji.json';

/**
 * Generate a random emoji.
 *
 * @category Text
 *
 * @example
 *
 * randEmoji()
 *
 * @example
 *
 * randEmoji({ length: 10 })
 *
 */
export function randEmoji<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
