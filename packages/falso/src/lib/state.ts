import { FakeOptions, fake } from './core/core';
import { data } from './state.json';

/**
 * Generate a random state.
 *
 * @category address
 *
 * @example
 *
 * randState()
 *
 * @example
 *
 * randState({ length: 10 })
 *
 * @example
 *
 * randState({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randState<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
