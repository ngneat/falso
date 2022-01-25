import { FakeOptions, fake } from './core/core';
import { data } from './rabbit.json';

/**
 * Generate a random rabbit.
 *
 * @category animals
 *
 * @example
 *
 * randRabbit()
 *
 * @example
 *
 * randRabbit({ length: 10 })
 *
 */
export function randRabbit<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
