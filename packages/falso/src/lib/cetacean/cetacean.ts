import { FakeOptions, fake } from '../core/core';
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
 */
export function randCetacean<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
