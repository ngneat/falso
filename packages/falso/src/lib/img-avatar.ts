import { FakeOptions, fake } from './core';
import { data } from './img-avatar.json';

export function imgAvatar<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
