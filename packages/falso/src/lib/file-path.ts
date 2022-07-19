import { FakeOptions, fake } from './core/core';
import { data } from './file-path.json';

/**
 * Generate a random file path.
 *
 * @category system
 *
 * @example
 *
 * randFilePath()
 *
 * @example
 *
 * randFilePath({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randFilePath<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
