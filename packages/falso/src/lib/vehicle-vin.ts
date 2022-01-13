import { FakeOptions, fake } from './core';
import { data } from './vehicle-vin.json';

export function vehicleVin<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
