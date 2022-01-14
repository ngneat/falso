import { FakeOptions, fake } from './core/core';
import { data } from './state.json';

/**
 * Generate a random state.
 *
 * @category TBD
 *
 * @example
 *
 * state()
 *
 * @example
 *
 * state({ length: 10 })
 *
 */
export function state<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
