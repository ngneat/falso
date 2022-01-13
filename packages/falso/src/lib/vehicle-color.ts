import { FakeOptions, fake } from './core';
import { data } from './vehicle-color.json';

export function vehicleColor<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
