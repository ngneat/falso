import { FakeOptions, fake } from './core/core';
import { data } from './job-title.json';

/**
 * Generate a random job title.
 *
 * @category Jobs
 *
 * @example
 *
 * randJobTitle()
 *
 * @example
 *
 * randJobTitle({ length: 10 })
 *
 */
export function randJobTitle<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
