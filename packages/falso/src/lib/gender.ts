import { FakeOptions, fake } from './core/core';
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
 * randGender({ length: 10 })
 *
 * @example
 *
 * randGender({ code: true })
 *
 */
export function randGender<Options extends GenderOptions>(options?: Options) {
  return fake(options?.code ? genderCode : gender, options);
}
