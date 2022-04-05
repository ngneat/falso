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
 * @example
 *
 * randAwsService({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randAwsService<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
