import { FakeOptions, fake } from './core/core';
import { data } from './county.json';

/**
 * Generate a random county.
 *
 * @category Address
 *
 * @example
 *
 * randCounty()
 *
 * @example
 *
 * randCounty({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randCounty<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
