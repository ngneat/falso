import { FakeOptions, fake } from './core';
import { data } from './vehicle-model.json';

export function vehicleModel<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
