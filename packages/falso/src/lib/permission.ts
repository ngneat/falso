import { FakeOptions, fake } from './core/core';
import { data } from './permission.json';

interface PermissionOptions extends FakeOptions {
  numeric?: boolean;
  combination?: boolean;
}

/**
 * Generate a random permission.
 *
 * @category system
 *
 * @example
 *
 * randPermission()
 *
 * @example
 *
 * randPermission({ length: 10 })
 * randPermission({ numeric: true })
 * randPermission({ combination: true })
 * randPermission({ numeric: true, combination: true })
 *
 */
export function randPermission<Options extends PermissionOptions>(
  options?: Options
) {
  if (options?.numeric && options?.combination) {
    return fake([0, 1, 2, 3, 4, 5, 6, 7], options);
  }

  if (options?.numeric) {
    return fake([0, 1, 2, 4], options);
  }

  if (options?.combination) {
    return fake(
      ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'],
      options
    );
  }

  return fake(data, options);
}
