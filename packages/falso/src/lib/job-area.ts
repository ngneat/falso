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
 * @example
 *
 * randJobArea({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randJobArea<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
