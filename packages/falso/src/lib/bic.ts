import { FakeOptions, fake } from './core/core';
import { data } from './bic.json';

/**
 * Generate a random bic.
 *
 * @category TBD
 *
 * @example
 *
 * bic()
 *
 * @example
 *
 * bic({ length: 10 })
 *
 */
export function bic<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
