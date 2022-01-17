import { fake, FakeOptions } from './core/core';
import { data } from './aws-service.json';

/**
 * Generate a random AWS service name.
 *
 * @category AWS
 *
 * @example
 *
 * randAwsService()
 *
 * @example
 *
 * randAwsService({ length: 10 })
 *
 */
export function randAwsService<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
