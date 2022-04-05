import { FakeOptions, fake } from './core/core';
import { data } from './cetacean.json';

/**
 * Generate a random cetacean.
 *
 * @category animals
 *
 * @example
 *
 * randCetacean()
 *
 * @example
 *
 * randCetacean({ length: 10 })
 *
 * @example
 *
 * randCetacean({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randCetacean<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
