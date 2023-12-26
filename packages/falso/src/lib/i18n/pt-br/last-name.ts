import { NameOptions } from '../../full-name';
import { randLastName as randLastNameDefault } from '../../last-name';
import { data as locale } from './last-name.i18n.json';

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
  const _options = {
    ...options,
    locale,
  };

  return randLastNameDefault(_options);
}
