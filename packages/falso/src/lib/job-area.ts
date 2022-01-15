import { FakeOptions, fake } from './core/core';
import { data } from './job-area.json';

/**
 * Generate a random job area.
 *
 * @category Jobs
 *
 * @example
 *
 * randJobArea()
 *
 * @example
 *
 * randJobArea({ length: 10 })
 *
 */
export function randJobArea<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
