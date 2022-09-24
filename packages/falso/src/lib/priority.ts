import { FakeOptions, fake } from './core/core';
import { data } from './priority.json';

/**
 * Generate a random priority.
 *
 * @category general
 *
 * @example
 *
 * randPriority()
 *
 * @example
 *
 * randPriority({ length: 10 })
 *
 * @example
 *
 * randPriority({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randPriority<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
