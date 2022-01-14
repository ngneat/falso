import { FakeOptions, fake } from './core/core';
import { data } from './crocodilia.json';

/**
 * Generate a random crocodilia.
 *
 * @category TBD
 *
 * @example
 *
 * crocodilia()
 *
 * @example
 *
 * crocodilia({ length: 10 })
 *
 */
export function crocodilia<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
