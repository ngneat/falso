import { FakeOptions, fake } from './core/core';
import { data } from './job-area.json';

/**
 * Generate a random job-area.
 *
 * @category TBD
 *
 * @example
 *
 * jobArea()
 *
 * @example
 *
 * jobArea({ length: 10 })
 *
 */
export function jobArea<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
