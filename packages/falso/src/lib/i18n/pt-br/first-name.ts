// import { fake } from '../core/core';
import { fake } from '../../core/core';
import { NameOptions } from '../../full-name';
import { rand } from '../../rand';
import { data } from './first-name.i18n.json';

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
  const withAccents = options?.withAccents ?? false;
  const gender = options?.gender ?? rand(['male', 'female']);
  const locale = options?.locale;

  const names: string[] = withAccents
    ? locale
      ? locale?.withAccents[gender]
      : data.withAccents[gender]
    : locale
    ? locale?.withoutAccents[gender]
    : data.withoutAccents[gender];

  return fake(names, options);
}
