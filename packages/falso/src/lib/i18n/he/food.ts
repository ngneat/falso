import { FakeOptions, fake } from '../../core/core';
import { data } from './food.i18n.json';

/**
 * Generate a random food item.
 *
 * @category food
 *
 * @example
 *
 * randFood()
 *
 * @example
 *
 * randFood({ length: 10 })
 *
 */
export function randFood<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
