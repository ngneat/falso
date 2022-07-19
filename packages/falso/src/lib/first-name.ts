import { fake } from './core/core';
import { data } from './first-name.json';
import { NameOptions } from './full-name';
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
 *
 * @automaticallyGeneratedExamples
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
