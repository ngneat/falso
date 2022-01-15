import { FakeOptions, fake } from './core/core';
import { data } from './text.json';

/**
 * Generate a random text.
 *
 * @category text
 *
 * @example
 *
 * randText()
 *
 * @example
 *
 * randText({ length: 10 })
 *
 */
export function randText<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
