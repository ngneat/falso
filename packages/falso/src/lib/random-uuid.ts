import { v4 as uuidv4 } from 'uuid';
import { fake, FakeOptions } from './core';

export function randomUuid<Options extends FakeOptions>(options?: Options) {
  return fake(() => uuidv4(), options);
}
