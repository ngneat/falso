import { fake, FakeOptions } from './core/core';
import { randLastName } from './last-name';
import { randFirstName } from './first-name';

export interface NameOptions extends FakeOptions {
  withAccents?: boolean;
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
 * randFullName({ withAccents: false })
 *
 * @example
 *
 * randFullName({ length: 10 })
 *
 * @example
 *
 * randFullName({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randFullName<Options extends NameOptions = never>(
  options?: Options
) {
  const nameOptions = {
    withAccents: options?.withAccents,
  };

  return fake(
    () => `${randFirstName(nameOptions)} ${randLastName(nameOptions)}`,
    options
  );
}
