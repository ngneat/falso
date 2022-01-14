import { fake, FakeOptions } from './core/core';
import { random } from './random';

export const numericChars = '0123456789';
export const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
export const specialChars = 'TODO';
export const numericAlphaChars = `${numericChars}${alphaChars}${alphaChars
  .split('')
  .map((v) => v.toUpperCase())
  .join('')}`;

function generator(size = 8, chars = numericAlphaChars) {
  let result = '';

  for (let i = size; i > 0; --i)
    result += chars[Math.floor(random() * chars.length)];

  return result;
}

type RandomSequenceOptions = {
  size?: number;
  chars?: string;
} & FakeOptions;

/**
 * Generate a random random sequence.
 *
 * @category TBD
 *
 * @example
 *
 * randomSequence()
 *
 * @example
 *
 * randomSequence({ length: 10 })
 *
 */
export function randomSequence<Options extends RandomSequenceOptions>(
  options?: Options
) {
  return fake(() => generator(options?.size, options?.chars), options);
}
