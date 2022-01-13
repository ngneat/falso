import { FakeOptions, fake } from './core';
import { data } from './vehicle-type.json';

export function vehicleType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
