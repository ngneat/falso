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

export function toCollection<Collection, Options extends FakeOptions = {length: number}>(
  generator: () => Collection,
  options: Options = { length: 5 } as Options
): Collection[] {
  return fake<Collection, Options>(() => generator(), options) as Collection[];
}
