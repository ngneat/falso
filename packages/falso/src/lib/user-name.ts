import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';
import { randBoolean } from './boolean';
import { randFirstName } from './first-name';
import { randLastName } from './last-name';

export interface UserNameOptions extends FakeOptions {
  firstName?: string;
  lastName?: string;
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
 */
export function randUserName<Options extends UserNameOptions = never>(
  options?: Options
) {
  const factory: () => string = () => {
    const firstName = options?.firstName ?? randFirstName();
    const lastName = options?.lastName ?? randLastName();
    let userName = `${firstName} ${lastName}`.replace(' ', fake(['.', '_']));

    if (randBoolean()) {
      userName += randNumber({ min: 0, max: 100 });
    }

    return userName;
  };

  return fake(factory, options);
}
