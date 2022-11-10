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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'us-east-2'
 * 'us-east-1'
 * 'us-west-1'
 */

export function randAwsRegion<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
