import { FakeOptions, fake } from './core/core';
import { data } from './country.json';

/**
 * Generate a random country.
 *
 * @category address
 *
 * @example
 *
 * randCountry()
 *
 * @example
 *
 * randCountry({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Argentina'
 * 'Peru'
 * 'Colombia'
 */

export function randCountry<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
