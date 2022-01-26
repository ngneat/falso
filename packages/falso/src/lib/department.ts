import { FakeOptions, fake } from './core/core';
import { data } from './department.json';

/**
 * Generate a random department.
 *
 * @category Commerce
 *
 * @example
 *
 * randDepartment()
 *
 * @example
 *
 * randDepartment({ length: 10 })
 *
 */
export function randDepartment<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
