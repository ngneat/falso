import { FakeOptions, fake } from './core';
import { data } from './random-object-element.json';

// TODO ?
export function randomObjectElement<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
