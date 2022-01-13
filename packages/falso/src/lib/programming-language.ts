import { FakeOptions, fake } from './core';
import { data } from './programming-language.json';

export function programmingLanguage<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
