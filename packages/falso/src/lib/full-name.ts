import { fake, FakeOptions } from './core/core';
import { randLastName } from './last-name';
import { randFirstName } from './first-name';

/**
 * Generate a random full name.
 *
 * @category Address
 *
 * @example
 *
 * randFullName()
 *
 * @example
 *
 * randFullName({ length: 10 })
 *
 */
export function randFullName<Options extends FakeOptions>(options?: Options) {
  return fake(() => `${randFirstName()} ${randLastName()}`, options);
}
