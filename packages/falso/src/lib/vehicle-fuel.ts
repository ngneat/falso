import { FakeOptions, fake } from './core';
import { data } from './vehicle-fuel.json';

export function vehicleFuel<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
