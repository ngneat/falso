import { FakeOptions, fake } from './core/core';
import { data } from './horse.json';

/**
 * Generate a random horse.
 *
 * @category TBD
 *
 * @example
 *
 * horse()
 *
 * @example
 *
 * horse({ length: 10 })
 *
 */
export function horse<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
