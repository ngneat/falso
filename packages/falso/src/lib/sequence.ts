import { FakeOptions, Return } from './core/core';
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

type CharTypes = 'numeric' | 'alpha' | 'alphaNumeric' | 'special';

type RandomSequenceOptions = {
  size?: number;
  chars?: string;
} & FakeOptions;

type RandomSequenceOptions2 = {
  size?: number;
  charType?: CharTypes;
  chars?: string;
} & FakeOptions;

// Helper type to determine the return type based on `charType`
type ReturnTypeFromCharType<CharType extends CharTypes | undefined> =
  CharType extends 'numeric' | 'alpha' | 'alphaNumeric' | 'special'
    ? string
    : string[];

/**
 * Simulating the `fake` function.
 */
function fake<T>(generatorFn: () => T, options?: any): T {
  return generatorFn(); // Assuming `fake` returns the value produced by generatorFn
}

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
 * randSequence({ charType: 'numeric' })
 *
 * @example
 *
 * randSequence({ length: 10 })
 *
 */
export function randSequence<Options extends RandomSequenceOptions2 = never>(
  options?: Options
): Return<ReturnTypeFromCharType<Options['charType']>, Options> {
  if (options?.charType && !options?.chars) {
    switch (options.charType) {
      case 'alpha':
        return fake(
          () =>
            generator(
              options?.size,
              `${alphaChars}${alphaChars.toUpperCase()}`
            ),
          options
        ) as Return<ReturnTypeFromCharType<Options['charType']>, Options>;
      case 'alphaNumeric':
        return fake(
          () => generator(options?.size, numericAlphaChars),
          options
        ) as Return<ReturnTypeFromCharType<Options['charType']>, Options>;
      case 'numeric':
        return fake(
          () => generator(options?.size, numericChars),
          options
        ) as Return<ReturnTypeFromCharType<Options['charType']>, Options>;
      case 'special':
        return fake(
          () => generator(options?.size, specialChars),
          options
        ) as Return<ReturnTypeFromCharType<Options['charType']>, Options>;
      default:
        return neverChecker(options.charType);
    }
  } else {
    const result = fake(
      () => generator(options?.size, options?.chars),
      options
    );
    return result as Return<
      ReturnTypeFromCharType<Options['charType']>,
      Options
    >;
  }
}

function neverChecker(value: never): never {
  throw new Error(`Invalid charType: ${value}`);
}
