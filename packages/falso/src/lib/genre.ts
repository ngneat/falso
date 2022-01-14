import { FakeOptions, fake } from './core/core';
import { data } from './genre.json';

/**
 * Generate a random genre.
 *
 * @category TBD
 *
 * @example
 *
 * genre()
 *
 * @example
 *
 * genre({ length: 10 })
 *
 */
export function genre<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
