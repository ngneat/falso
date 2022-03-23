import { fake, FakeOptions, objectWithIdComparisonFunction } from './core/core';
import { randUuid } from './uuid';
import { randBoolean } from './boolean';
import { randText } from './text';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

/**
 * Generate a random todo.
 *
 * @category entities
 *
 * @example
 *
 * randTodo()
 *
 * @example
 *
 * randTodo({ length: 10 })
 *
 */
export function randTodo<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory: () => Todo = () => ({
    id: randUuid(),
    title: randText({ charCount: 40 }),
    completed: randBoolean(),
  });

  return fake(factory, options, objectWithIdComparisonFunction);
}
