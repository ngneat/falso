import { FakeOptions, fake } from './core/core';
import { randNumber } from './number';

/**
 * Generate a random pick from an array.
 *
 * @category General
 *
 * @example
 *
 * randPick([ "A", "B", "C", ... ])
 *
 * @example
 *
 * randPick([ 1, 2, 3, ... ])
 *
 * @example
 *
 * randPick([ "test", 123, { hello:"world" }, ... ])
 *
 * @example
 *
 * randPick([ 1, 3, 8, 12],{ length: 10 })
 *
 */
export function randPick<Options extends FakeOptions = never>(
  array: Array<unknown>,
  options?: Options
) {
  if (!array || array.length === 0) {
    throw new Error('the array need to have at least 1 element');
  }

  const factory = () => {
    return array[randNumber({ min: 0, max: array.length - 1 })];
  };
  return fake(factory, options);
}
