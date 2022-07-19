import { FakeOptions, fake } from './core/core';
import { data } from './lion.json';

/**
 * Generate a random lion.
 *
 * @category animals
 *
 * @example
 *
 * randLion()
 *
 * @example
 *
 * randLion({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Cape lion'
 * 'Transvaal lion'
 * 'Masai Lion'
 */

export function randLion<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
