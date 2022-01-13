import { FakeOptions, fake } from './core';
import { data } from './snake.json';

export function snake<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
