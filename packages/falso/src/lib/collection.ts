import { FakeOptions, fake } from './core/core';

/**
 * Generate a collection from a custom generators functions
 *
 * @category util
 *
 * @example
 *
 * toCollection(() => {
 *   return { data: randNumber(); }
 * })
 *
 * example : {data: 2}
 *
 * @example
 *
 *
 * toCollection(() => {
 *   return { data: randNumber(); }
 * }, { length: 10 }) // default is no length.
 *
 * example : [{data: 2}, {data: 5}, ..., {data: 3}]
 *
 * The generator function, could receive two parameters :
 * - options : the options object. You can pass to the generator some other options, if needed
 * - index : The index of item currently generated. if you would like to use it in your generator function.
 */
export function toCollection<
  Collection = never,
  Options extends FakeOptions = never
>(
  generateCollection: (options?: Options, index?: number) => Collection,
  options?: Options
): Collection | Collection[] {
  return fake<Collection, Options>(
    (index: number) => generateCollection(options, index),
    options
  ) as Collection | Collection[];
}
