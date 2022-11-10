import { FakeOptions, fake } from './core/core';
import { data } from './fish.json';

/**
 * Generate a random fish.
 *
 * @category animals
 *
 * @example
 *
 * randFish()
 *
 * @example
 *
 * randFish({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Araucanian herring'
 * 'Pacific saury'
 * 'Indian oil sardine'
 */

export function randFish<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
