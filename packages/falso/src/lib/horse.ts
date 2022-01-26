import { FakeOptions, fake } from './core/core';
import { data } from './horse.json';

/**
 * Generate a random horse.
 *
 * @category animals
 *
 * @example
 *
 * randHorse()
 *
 * @example
 *
 * randHorse({ length: 10 })
 *
 */
export function randHorse<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
