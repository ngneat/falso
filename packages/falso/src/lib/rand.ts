import { random } from './random';

/**
 * Get a random item from array.
 *
 * @category general
 *
 * @example
 *
 * rand([1, 2, 3])
 *
 */
export function rand<T>(arr: T[]): T {
  return arr[Math.floor(random() * arr.length)];
}
