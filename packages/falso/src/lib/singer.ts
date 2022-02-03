import { FakeOptions, fake } from './core/core';
import { data } from './singer.json';
/**
 * Generate a random singer.
 *
 * @category Music
 *
 * @example
 *
 * randSinger()
 *
 * @example
 *
 * randSinger({ length: 10 })
 *
 */
export function randSinger<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
