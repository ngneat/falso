import { FakeOptions, fake } from './core/core';
import { data } from './file-type.json';

/**
 * Generate a random file type.
 *
 * @category system
 *
 * @example
 *
 * randFileType()
 *
 * @example
 *
 * randFileType({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'model'
 * 'x-conference'
 * 'x-shader'
 */

export function randFileType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
