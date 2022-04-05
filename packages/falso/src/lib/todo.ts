import { fake, FakeOptions, checkUniqueObjectWithId } from './core/core';
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
 * @example
 *
 * randTodo({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
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

  return fake(factory, options, checkUniqueObjectWithId);
}
