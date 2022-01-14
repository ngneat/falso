import { FakeOptions, fake } from './core/core';
import { data } from './directory-path.json';

/**
 * Generate a random directory-path.
 *
 * @category TBD
 *
 * @example
 *
 * directoryPath()
 *
 * @example
 *
 * directoryPath({ length: 10 })
 *
 */
export function directoryPath<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
