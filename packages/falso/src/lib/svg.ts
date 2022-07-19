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
 *
 * @automaticallyGeneratedExamples
 */

export function randSvg<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
