import { fake, FakeOptions } from './core/core';
import { randUuid } from './uuid';
import { randEmail } from './email';
import { randFirstName } from './first-name';
import { randLastName } from './last-name';
import { randPhoneNumber } from './phone-number';
import { randUserName } from './user-name';
import { randAvatar } from './avatar';
import { randAddress } from './address';
import { objectWithIdIsUnique } from './core/unique-validators';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  img: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  phone: string;
}

/**
 * Generate a random user.
 *
 * @category entities, user
 *
 * @example
 *
 * randUser()
 *
 * @example
 *
 * randUser({ length: 10 })
 *
 * @example
 *
 * randUser({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randUser<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    const firstName = randFirstName({ withAccents: false });
    const lastName = randLastName({ withAccents: false });

    const user: User = {
      id: randUuid(),
      email: randEmail({ firstName, lastName }),
      firstName,
      lastName,
      phone: randPhoneNumber(),
      img: randAvatar(),
      username: randUserName({ firstName, lastName }),
      address: randAddress(),
    };

    return user;
  };

  return fake(factory, options, { uniqueComparer: objectWithIdIsUnique });
}
