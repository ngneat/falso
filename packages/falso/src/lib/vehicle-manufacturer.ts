import { FakeOptions, fake } from './core';
import { data } from './vehicle-manufacturer.json';

export function vehicleManufacturer<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
