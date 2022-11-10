import { FakeOptions, fake } from './core/core';
import { data } from './permission.json';

interface PermissionOptions extends FakeOptions {
  numeric?: boolean;
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
 *
 * @example
 *
 * randPermission({ numeric: true })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'read'
 * 'write'
 * 'execute'
 */

export function randPermission<Options extends PermissionOptions = never>(
  options?: Options
) {
  if (options?.numeric) {
    return fake([0, 1, 2, 4], options);
  }

  return fake(data, options);
}
