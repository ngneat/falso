import { FakeOptions, fake } from './core/core';
import { data } from './singer.json';
import { rand } from './rand';

/**
 * Generate a random singer.
 *
 * @category text
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
  const singerName = () => {
    let singer = rand(data);
    return singer;
  };
  return fake(singerName, options);
}
