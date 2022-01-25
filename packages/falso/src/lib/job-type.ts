import { FakeOptions, fake } from './core/core';
import { data } from './job-type.json';

/**
 * Generate a random job type.
 *
 * @category Jobs
 *
 * @example
 *
 * randJobType()
 *
 * @example
 *
 * randJobType({ length: 10 })
 *
 */
export function randJobType<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
