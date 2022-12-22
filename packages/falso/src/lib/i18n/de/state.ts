import { FakeOptions, fake } from '../../core/core';
import { data } from './state.i18n.json';

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
 */
export function randState<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
