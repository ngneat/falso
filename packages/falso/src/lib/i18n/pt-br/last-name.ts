import { randBoolean } from '../../boolean';
import { fake } from '../../core/core';
import { NameOptions } from '../../full-name';
import { data } from './last-name.i18n.json';

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
  const names = withAccents ? data['withAccents'] : data['withoutAccents'];

  return fake(names, options);
}
