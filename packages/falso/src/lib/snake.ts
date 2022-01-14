import { FakeOptions, fake } from './core/core';
import { data } from './snake.json';

/**
 * Generate a random snake.
 *
 * @category TBD
 *
 * @example
 *
 * snake()
 *
 * @example
 *
 * snake({ length: 10 })
 *
 */
export function snake<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
