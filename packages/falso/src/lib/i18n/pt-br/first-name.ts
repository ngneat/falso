import { NameOptions } from '../../full-name';
import { randFirstName as randFirstNameDefault } from '../../first-name';
import { data as locale } from './first-name.i18n.json';

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
  const _options = {
    ...options,
    locale,
  };

  return randFirstNameDefault(_options);
}
