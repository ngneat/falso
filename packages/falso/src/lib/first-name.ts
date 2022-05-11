import { fake } from './core/core';
import { data } from './first-name.json';
import { NameOptions } from './full-name';
import { randBoolean } from './boolean';
import { rand } from './rand';

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
 * randFirstName({ withAccents: true })
 *
 * @example
 *
 * randFirstName({ gender: 'female' }) // Emma
 *
 * @example
 *
 * randFirstName({ length: 10 })
 *
 */
export function randFirstName<Options extends NameOptions = never>(
  options?: Options
) {
  const withAccents = options?.withAccents ?? randBoolean();
  const gender = options?.gender ?? rand(['male', 'female']);
  const names = withAccents
    ? data.withAccents[gender]
    : data.withoutAccents[gender];

  return fake(names, options);
}
