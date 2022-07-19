import { FakeOptions, fake } from './core/core';
import { data } from './snake.json';

/**
 * Generate a random snake.
 *
 * @category animals
 *
 * @example
 *
 * randSnake()
 *
 * @example
 *
 * randSnake({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randSnake<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
