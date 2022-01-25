import { FakeOptions, fake } from './core/core';
import { data } from './svg.json';

/**
 * Generate a random svg.
 *
 * @category General
 *
 * @example
 *
 * randSvg()
 *
 * @example
 *
 * randSvg({ length: 10 })
 *
 */
export function randSvg<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
