import { fake, FakeOptions } from './core';

function random(
  size = 8,
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) {
  let result = '';

  for (let i = size; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];

  return result;
}

type RandomSequenceOptions = {
  size?: number;
  chars?: string;
} & FakeOptions;

export function randomSequence<Options extends RandomSequenceOptions>(
  options?: Options
) {
  return fake(() => random(options?.size, options?.chars), options);
}
