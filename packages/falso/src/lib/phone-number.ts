import { FakeOptions, fake } from './core';
import { data } from './phone-number.json';

//TODO add format support
export function phoneNumber<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
