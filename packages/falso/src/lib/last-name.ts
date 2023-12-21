import { fake } from './core/core';
import { randBoolean } from './boolean';
import { NameOptions } from './full-name';
import { data } from './last-name.json';

/**
 * Generate a random last name.
 *
 * @category person
 *
 * @example
 *
 * randLastName()
 *
 * @example
 *
 * randLastName({ withAccents: false })
 *
 * @example
 *
 * randLastName({ length: 10 })
 *
 */
export function randLastName<Options extends NameOptions = never>(
  options?: Options
) {
  const withAccents = options?.withAccents ?? randBoolean();
  const locale = options?.locale || data;
  const names: string[] = withAccents
    ? locale['withAccents']
    : locale['withoutAccents'];

  return fake(names, options);
}
