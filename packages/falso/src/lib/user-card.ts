import { FakeOptions, fake } from './core/core';
import { data } from './user-card.json';

export interface UserCard {
  name: string;
  username: string;
  avatar: string;
  email: string;
  dob: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// TODO - generate programmatically
export function randUserCard<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
