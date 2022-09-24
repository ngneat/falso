import { fake, FakeOptions } from './core/core';
import { data } from './aws-region.json';

/**
 * Generate a random AWS region.
 *
 * @category AWS
 *
 * @example
 *
 * randAwsRegion()
 *
 * @example
 *
 * randAwsRegion({ length: 10 })
 *
 * @example
 *
 * randAwsRegion({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randAwsRegion<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
