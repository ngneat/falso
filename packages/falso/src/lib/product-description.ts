import { FakeOptions, fake } from './core/core';
import { data } from './product-description.json';

/**
 * Generate a random product-description.
 *
 * @category TBD
 *
 * @example
 *
 * randProductDescription()
 *
 * @example
 *
 * randProductDescription({ length: 10 })
 *
 */
export function randProductDescription<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
