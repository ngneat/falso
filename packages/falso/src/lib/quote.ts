import { FakeOptions, fake } from './core/core';
import { data } from './quote.json';

/**
 * Generate a random quote.
 *
 * @category text
 *
 * @example
 *
 * randQuote()
 *
 * @example
 *
 * randQuote({ length: 10 })
 *
 */
export function randQuote<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
