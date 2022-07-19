import { FakeOptions, fake } from './core/core';
import { data } from './department.json';

/**
 * Generate a random department.
 *
 * @category commerce
 *
 * @example
 *
 * randDepartment()
 *
 * @example
 *
 * randDepartment({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randDepartment<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
