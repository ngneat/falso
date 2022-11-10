import { FakeOptions, fake } from './core/core';
import { data } from './directory-path.json';

/**
 * Generate a random directory path.
 *
 * @category system
 *
 * @example
 *
 * randDirectoryPath()
 *
 * @example
 *
 * randDirectoryPath({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * '/usr/X11R6'
 * '/sys'
 * '/mnt'
 */

export function randDirectoryPath<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
