import { FakeOptions, fake } from './core/core';
import { data } from './job-type.json';

/**
 * Generate a random job type.
 *
 * @category jobs
 *
 * @example
 *
 * randJobType()
 *
 * @example
 *
 * randJobType({ length: 10 })
 *
 * @example
 *
 * randJobType({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randJobType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
