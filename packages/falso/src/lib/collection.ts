import { FakeOptions, fake, Return, getRandomInRange } from './core/core';

export interface ToCollectionOptions extends FakeOptions {
  minLength?: number; // default 0
  maxLength?: number; // default minLength + 10 = 10
}

/**
 * Generate a collection from a custom generators functions
 *
 * The generator function, could receive two parameters :
 * - options : the options object. You can pass to the generator some other options, if needed
 * - index : The index of item currently generated. if you would like to use it in your generator function.
 *
 * ### Randomly length generator.
 *
 * You can specify minLength or maxLength (or both), to generate a random length collection.
 * If one of minLength or maxLength is specified, a random length will be calculated before,
 * and will return this random number of items.
 * By default, minLength was equal to 0 and maxLength equal to min + 10.
 *
 * If minLength was equals to 0 and random return to 0, this function will return an empty array.
 *
 * @category general
 *
 * @example
 *
 * toCollection(() => { return { data: randNumber() }}) //  {data: 2}
 *
 * @example
 *
 *
 * toCollection(() => {
 *   return { data: randNumber(); }
 * }, { length: 10 }) // default is no length.
 * // [{data: 2}, {data: 5}, ..., {data: 3}]
 *
 * @example
 *
 * toCollection(() => {
 *   return { data: randNumber(); }
 * }, { minLength: 1, maxLength: 10 }) // default is minLength = 0 and maxLength = min + 10.
 * // [{data: 2}, {data: 5}, ..., {data: 3}]
 *
 * */
export function toCollection<
  Collection = never,
  Options extends ToCollectionOptions = never
>(
  generateCollection: (options?: Options, index?: number) => Collection,
  options?: Options
): Return<Collection, Options> | Collection[] {
  if (
    options &&
    !options?.length &&
    (options?.minLength !== null || options?.maxLength !== null)
  ) {
    const min = options.minLength || 0;
    options.length = getRandomInRange({
      min,
      max: options.maxLength || min + 10,
      fraction: 0,
    });
    if (options.length === 0) {
      return [];
    }
  }
  return fake<Collection, Options>(
    (index: number) => generateCollection(options, index),
    options
  );
}
