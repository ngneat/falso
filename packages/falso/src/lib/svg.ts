import { FakeOptions, fake } from './core/core';
import { data } from './svg.json';

/**
 * Generate a random svg.
 *
 * @category general
 *
 * @example
 *
 * randSvg()
 *
 * @example
 *
 * randSvg({ length: 10 })
 *
 * @example
 *
 * randSvg({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randSvg<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
