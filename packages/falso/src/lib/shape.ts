import { FakeOptions, fake } from './core/core';
import { data } from './shape.json';

/**
 * Generate a random shape.
 *
 * @category General
 *
 * @example
 *
 * randShape()
 *
 * @example
 *
 * randShape({ length: 10 })
 *
 */
export function randShape<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
