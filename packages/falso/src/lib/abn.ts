import { FakeOptions, fake } from './core/core';
import { isValidAbn } from './core/validators';
import { randNumber } from './number';

export interface AbnOptions extends FakeOptions {
  /**
   * Will generate only valid ABN's when `true`, otherwise randomised between valid and invalid.
   */
  onlyValid?: boolean;
}

/**
 * Generate a random abn.
 *
 * @category Finance
 *
 * @example
 *
 * randAbn()
 *
 * @example
 *
 * randAbn({ length: 10 })
 *
 * @example
 *
 * randAbn({ onlyValid: false }) //default is true
 */
export function randAbn<Options extends AbnOptions = never>(options?: Options) {
  const factory = () => {
    const onlyValid = options?.onlyValid ?? true;
    let digits = '';
    do {
      digits = randNumber({ min: 0, max: 9, length: 11 })
        .map((n) => String(n))
        .join('');
    } while (!isValidAbn(digits) && onlyValid);
    return digits;
  };

  return fake(factory, options);
}
