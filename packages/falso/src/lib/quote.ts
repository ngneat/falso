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
 * @example
 *
 * randQuote({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randQuote<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
