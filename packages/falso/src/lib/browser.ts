import { FakeOptions, fake } from './core/core';
import { data } from './browser.json';

/**
 * Generate a random browser.
 *
 * @category internet
 *
 * @example
 *
 * randBrowser()
 *
 * @example
 *
 * randBrowser({ length: 10 })
 *
 */
export function randBrowser<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
