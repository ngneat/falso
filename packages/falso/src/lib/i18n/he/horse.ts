import { FakeOptions, fake } from '../../core/core';
import { data } from './horse.i18n.json';

/**
 * Generate a random horse breed.
 *
 * @category animal
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
