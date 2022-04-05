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
 * @example
 *
 * randSnake({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randSnake<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
