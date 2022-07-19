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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'A stumble may prevent a fall.'
 * 'Put your future in good hands your own.'
 * "What you see depends on what you're looking for."
 */

export function randQuote<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
