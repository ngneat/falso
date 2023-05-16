import { FakeOptions, fake } from './core/core';
import { data } from './resolution.json';

/**
 * Generate random screen resolution
 *
 * @category internet
 *
 * @example
 *
 * randResolution()
 *
 * @example
 *
 * randResolution()
 *
 *
 */

export function randResolution<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
