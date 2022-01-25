import { fake, FakeOptions } from './core/core';
import { randFullName } from './full-name';
import { randNumber } from './number';
import { randBoolean } from './boolean';

/**
 * Generate a random user name.
 *
 * @category person
 *
 * @example
 *
 * randUserName()
 *
 * @example
 *
 * randUserName({ length: 10 })
 *
 */
export function randUserName<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(() => {
    let userName = randFullName().replace(' ', fake(['.', '_']));

    if (randBoolean()) {
      userName += randNumber({ min: 0, max: 100 });
    }

    return userName;
  }, options);
}
