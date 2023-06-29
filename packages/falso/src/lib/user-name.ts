import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';
import { randBoolean } from './boolean';
import { randFirstName } from './first-name';
import { randLastName } from './last-name';

export interface UserNameOptions extends FakeOptions {
  firstName?: string;
  lastName?: string;
  withAccents?: boolean;
}

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
 * @example
 *
 * randUserName({ firstName: 'Ryan' })
 *
 * @example
 *
 * randUserName({ lastName: 'Smee' })
 *
 * @example
 *
 * randUserName({ withAccents: false }) // return username without special symbols like â, î or ô and etc
 *
 */
export function randUserName<Options extends UserNameOptions = never>(
  options?: Options
) {
  const nameOptions = {
    withAccents: options?.withAccents,
  };

  return fake(() => {
    const firstName = options?.firstName ?? randFirstName(nameOptions);
    const lastName = options?.lastName ?? randLastName(nameOptions);
    let userName = `${firstName} ${lastName}`.replace(' ', fake(['.', '_']));

    if (randBoolean()) {
      userName += randNumber({ min: 0, max: 100 });
    }

    return userName;
  }, options);
}
