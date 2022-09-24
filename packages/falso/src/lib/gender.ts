import { fake, FakeOptions } from './core/core';
import { data as gender } from './gender.json';
import { data as genderCode } from './gender-code.json';

interface GenderOptions extends FakeOptions {
  code?: boolean;
}

/**
 * Generate a random gender.
 *
 * @category person
 *
 * @example
 *
 * randGender()
 *
 * @example
 *
 * randGender({ code: true }) // default is false
 *
 * @example
 *
 * randGender({ length: 10 })
 *
 * @example
 *
 * randGender({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randGender<Options extends GenderOptions = never>(
  options?: Options
) {
  return fake(options?.code ? genderCode : gender, options);
}
