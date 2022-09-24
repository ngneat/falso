import { FakeOptions, fake } from './core/core';
import { data } from './shape.json';

/**
 * Generate a random shape.
 *
 * @category general
 *
 * @example
 *
 * randShape()
 *
 * @example
 *
 * randShape({ length: 10 })
 *
 * @example
 *
 * randShape({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randShape<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
