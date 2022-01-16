import { FakeOptions, fake } from './core/core';
import { data } from './phone-number.json';

//TODO add format support and generate programmatically
export function randPhoneNumber<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
