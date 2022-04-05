import { fake, FakeOptions } from './core/core';
import { random } from './random';

export const numericChars = '0123456789';
export const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
// TODO
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
 * Generate a random sequence.
 *
 * @category general
 *
 * @example
 *
 * randSequence()
 *
 * @example
 *
 * randSequence({ size: 10 })
 *
 * @example
 *
 * randSequence({ chars: 'aAbBcC@#' })
 *
 * @example
 *
 * randSequence({ length: 10 })
 *
 * @example
 *
 * randSequence({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randSequence<Options extends RandomSequenceOptions = never>(
  options?: Options
) {
  return fake(() => generator(options?.size, options?.chars), options);
}
