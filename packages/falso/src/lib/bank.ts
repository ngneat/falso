import { FakeOptions, fake } from './core/core';
import { data } from './bank.json';

/**
 * Generate a random bank.
 *
 * @category finance
 *
 * @example
 *
 * randBank()
 *
 * @example
 *
 * randBank({ length: 10 })
 *
 */
export function randBank<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
