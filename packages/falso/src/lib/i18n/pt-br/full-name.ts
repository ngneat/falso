import { fake } from '../../core/core';
import { randFirstName } from '../../first-name';
import { NameOptions } from '../../full-name';
import { randLastName } from '../../last-name';

import { data as localeFirstName } from './first-name.i18n.json';
import { data as localeLastName } from './last-name.i18n.json';

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

  const firstName = randFirstName({
    ...nameOptions,
    locale: localeFirstName,
  });

  const lastName = randLastName({
    ...nameOptions,
    locale: localeLastName,
  });

  return fake(() => `${firstName} ${lastName}`, options);
}
