import { FakeOptions, fake } from './core/core';
import { data } from './cow.json';

/**
 * Generate a random cow.
 *
 * @category TBD
 *
 * @example
 *
 * cow()
 *
 * @example
 *
 * cow({ length: 10 })
 *
 */
export function cow<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
