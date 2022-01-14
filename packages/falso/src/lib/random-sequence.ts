import { fake, FakeOptions } from './core';
import { random } from './random';

function generator(
  size = 8,
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) {
  let result = '';

  for (let i = size; i > 0; --i)
    result += chars[Math.floor(random() * chars.length)];

  return result;
}

type RandomSequenceOptions = {
  size?: number;
  chars?: string;
} & FakeOptions;

export function randomSequence<Options extends RandomSequenceOptions>(
  options?: Options
) {
  return fake(() => generator(options?.size, options?.chars), options);
}
