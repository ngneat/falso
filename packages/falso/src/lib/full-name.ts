import { fake, FakeOptions } from './core/core';
import { randLastName } from './last-name';
import { randFirstName } from './first-name';

export interface NameOptions extends FakeOptions {
  withAccents?: boolean;
  gender?: 'male' | 'female';
}

/**
 * Generate a random full name.
 *
 * @category person
 *
 * @example
 *
 * randFullName()
 *
 * @example
 *
 * randFullName({ gender: 'female' }) // Emma Marková
 *
 * @example
 *
 * randFullName({ withAccents: false }) // return full name without special symbols like â, î or ô and etc
 *
 * @example
 *
 * randFullName({ length: 10 })
 *
 */
export function randFullName<Options extends NameOptions = never>(
  options?: Options
) {
  const nameOptions = {
    withAccents: options?.withAccents,
    gender: options?.gender,
  };

  return fake(
    () => `${randFirstName(nameOptions)} ${randLastName(nameOptions)}`,
    options
  );
}
