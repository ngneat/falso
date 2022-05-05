import { fake } from './core/core';
import { randSwift, SwiftOptions } from './swift';

/**
 * Generate a random swift bic code.
 *
 * @category finance
 *
 * @example
 *
 * randBic()
 *
 * @example
 *
 * randBic({ bankCode: 'DEUT' }) // bank code of Deutsche Bank
 *
 * @example
 *
 * randBic({ countryCode: 'DE' }) // country code with ISO country code
 *
 * @example
 *
 * randBic({ locationCode: 'MM' }) // location code for Milan MM for Frankfurt FF and etc
 *
 * @example
 *
 * randBic({ branchCode: '250' }) // bank branch code
 *
 * @example
 *
 * randBic({ fillBranchCode: true }) // bank branch code filled with XXX
 *
 * @example
 *
 * randBic({ length: 10 })
 *
 */
export function randBic<Options extends SwiftOptions = never>(
  options?: Options
) {
  const _options = { ...options, length: undefined };

  const factory: () => string = () => {
    return randSwift(_options).toString();
  };

  return fake(factory, options);
}
