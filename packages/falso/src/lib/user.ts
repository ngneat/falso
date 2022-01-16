import { fake, FakeOptions } from './core/core';
import { randUuid } from './uuid';
import { randEmail } from './email';
import { randFirstName } from './first-name';
import { randLastName } from './last-name';
import { randCity } from './city';
import { randStreetAddress } from './street-address';
import { randZipCode } from './zip-code';
import { randPhoneNumber } from './phone-number';
import { randUserName } from './user-name';
import { randAvatar } from './avatar';

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
 * @category entities
 *
 * @example
 *
 * randUser()
 *
 * @example
 *
 * randUser({ length: 10 })
 *
 */
export function randUser<Options extends FakeOptions>(options?: Options) {
  return fake(() => {
    const user: User = {
      id: randUuid(),
      email: randEmail(),
      firstName: randFirstName(),
      lastName: randLastName(),
      phone: randPhoneNumber(),
      img: randAvatar(),
      username: randUserName(),
      address: {
        city: randCity(),
        street: randStreetAddress(),
        zipCode: randZipCode(),
      },
    };

    return user;
  }, options);
}
