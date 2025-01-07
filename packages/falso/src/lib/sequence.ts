import { fake, FakeOptions, Return } from './core/core';
import { random } from './random';

export const numericChars = '0123456789';
export const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
export const specialChars = '<>@!#$%^&*()_+[]{}?:;|\'"\\,./~`-=';
export const numericAlphaChars = `${numericChars}${alphaChars}${alphaChars.toUpperCase()}`;

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

type RandomSequenceOptions2 = {
  size?: number;
  charType?: 'numeric' | 'alpha' | 'alphaNumeric' | 'special';
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
 * randSequence({ charType: 'numeric' }) // numeric | alpha | alphaNumeric | special
 *
 * @example
 *
 * randSequence({ length: 10 })
 *
 */
export function randSequence<Options extends RandomSequenceOptions = never>(
  options?: RandomSequenceOptions
): Return<string | string[], Options>;
export function randSequence<Options extends RandomSequenceOptions2 = never>(
  options?: RandomSequenceOptions2
): Return<string | string[], Options>;
export function randSequence<
  Options extends RandomSequenceOptions & RandomSequenceOptions2 = never
>(options?: Options) {
  const generateSequence = () => {
    if (options?.charType && !options?.chars) {
      switch (options.charType) {
        case 'alpha':
          return generator(
            options?.size,
            `${alphaChars}${alphaChars.toUpperCase()}`
          );
        case 'alphaNumeric':
          return generator(options?.size, numericAlphaChars);
        case 'numeric':
          return generator(options?.size, numericChars);
        case 'special':
          return generator(options?.size, specialChars);
        default:
          return neverChecker(options.charType);
      }
    } else {
      return generator(options?.size, options?.chars);
    }
  };

  if (options?.length && options.length > 1) {
    return fake(
      () =>
        Array.from({ length: options.length ?? 0 }, () =>
          generateSequence()
        ) as string[],
      options
    );
  }

  return fake(generateSequence, options);
}

function neverChecker(value: never) {
  throw new Error(`Invalid charType: ${value}`);
}
