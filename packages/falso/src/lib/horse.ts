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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Pottok'
 * 'Dutch Heavy Draft'
 * 'Spanish Barb'
 */

export function randHorse<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
