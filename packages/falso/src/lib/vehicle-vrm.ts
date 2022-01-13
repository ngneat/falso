import { FakeOptions, fake } from './core';
import { data } from './vehicle-vrm.json';

export function vehicleVrm<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
