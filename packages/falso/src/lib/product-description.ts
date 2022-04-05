import { FakeOptions, fake } from './core/core';
import { data } from './product-description.json';

/**
 * Generate a random product description.
 *
 * @category Commerce
 *
 * @example
 *
 * randProductDescription()
 *
 * @example
 *
 * randProductDescription({ length: 10 })
 *
 * @example
 *
 * randProductDescription({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randProductDescription<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
