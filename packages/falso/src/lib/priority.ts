import { FakeOptions, fake } from './core/core';
import { data } from './priority.json';

/**
 * Generate a random priority.
 *
 * @category general
 *
 * @example
 *
 * randPriority()
 *
 * @example
 *
 * randPriority({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randPriority<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
