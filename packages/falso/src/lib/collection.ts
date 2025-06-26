import { FakeOptions, fake } from './core/core';

/**
 * Generate a collection from a custom generators functions
 *
 * @category util
 *
 *
 * @example
 *
 * toCollection(() => {
 *   return { data: randNumber(); }
 * }, { length: 10 })
 *
 */

export function toCollection<Collection, Options extends FakeOptions = never>(
  generator: () => Collection,
  options: Options
): Collection[] {
  return fake<Collection, Options>(() => generator(), {
    length: 5,
    ...options,
  }) as Collection[];
}
