import { FakeOptions, fake } from './core/core';
import { rand } from './rand';

/**
 * Generate a random datatype-boolean.
 *
 * @category TBD
 *
 * @example
 *
 * datatypeBoolean()
 *
 * @example
 *
 * datatypeBoolean({ length: 10 })
 *
 */
export function datatypeBoolean<Options extends FakeOptions>(
  options?: Options
) {
  return fake(() => rand([true, false]), options);
}
