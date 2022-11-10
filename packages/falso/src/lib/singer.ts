import { FakeOptions, fake } from './core/core';
import { data } from './singer.json';
/**
 * Generate a random singer.
 *
 * @category music
 *
 * @example
 *
 * randSinger()
 *
 * @example
 *
 * randSinger({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Mary J. Blige'
 * 'Steven Tyler'
 * 'Stevie Nicks'
 */

export function randSinger<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
