import { FakeOptions, fake } from './core/core';
import { data } from './product-name.json';

/**
 * Generate a random product name.
 *
 * @category commerce
 *
 * @example
 *
 * randProductName()
 *
 * @example
 *
 * randProductName({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Small Rubber Shoes'
 * 'Fantastic Wooden Sausages'
 * 'Handmade Frozen Salad'
 */

export function randProductName<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
