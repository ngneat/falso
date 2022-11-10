import { FakeOptions, fake } from './core/core';
import { data } from './product-adjective.json';

/**
 * Generate a random product adjective.
 *
 * @category commerce
 *
 * @example
 *
 * randProductAdjective()
 *
 * @example
 *
 * randProductAdjective({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Awesome'
 * 'Rustic'
 * 'Small'
 */

export function randProductAdjective<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
