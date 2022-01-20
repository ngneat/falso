import { fake } from './core/core';
import { data } from './first-name.json';
import { NameOptions } from './full-name';
import { randBoolean } from './boolean';

/**
 * Generate a random first name.
 *
 * @category person
 *
 * @example
 *
 * randFirstName()
 *
 * @example
 *
 * randFirstName({ length: 10 })
 *
 * @example
 *
 * randFirstName({ withAccents: true })
 *
 */
export function randFirstName<Options extends NameOptions>(options?: Options) {
  const withAccents = options?.withAccents ?? randBoolean();
  const names = withAccents ? data['withAccents'] : data['withoutAccents'];

  return fake(names, options);
}
