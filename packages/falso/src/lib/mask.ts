import { fake, FakeOptions, getRandomInRange } from './core/core';

/**
 * Generate a random mask.
 *
 * @category Finance
 *
 * @example
 *
 * randMask()
 *
 * @example
 *
 * randMask({ mask: "@#### @##" })
 *
 * @example
 *
 * randMask({ length: 10 })
 *
 */
export function randMask<
  Options extends FakeOptions & {
    mask?: string;
    char?: string;
    digit?: string;
  }
>(options?: Options) {
  return fake(() => {
    const [mask, char, digit] = [
      options?.mask ?? '@##@#',
      options?.char ?? '@',
      options?.digit ?? '#',
    ];

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomDigits = '0123456789';

    return mask
      .split('')
      .map((item) => {
        if (item == char)
          return randomChars.charAt(
            getRandomInRange({ min: 0, max: randomChars.length })
          );
        else if (item == digit)
          return randomDigits.charAt(
            getRandomInRange({ min: 0, max: randomDigits.length })
          );
        else return item;
      })
      .join('');
  }, options);
}
