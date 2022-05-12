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
 * @example
 *
 * randSinger({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randSinger<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
