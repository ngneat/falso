import { fake, FakeOptions } from './core/core';
import { randAlphaNumeric } from '@ngneat/falso';

/**
 * Generate a random AWS request id.
 *
 * @category AWS
 *
 * @example
 *
 * randAwsRequestId()
 *
 * @example
 *
 * randAwsRequestId({ length: 10 })
 *
 */
export function randAwsRequestId<Options extends FakeOptions = never>(
  options?: Options
) {
  const generator = () => {
    return [
      randAlphaNumeric({ length: 8 }),
      randAlphaNumeric({ length: 4 }),
      randAlphaNumeric({ length: 4 }),
      randAlphaNumeric({ length: 4 }),
      randAlphaNumeric({ length: 12 }),
    ]
      .map((v) => v.join(''))
      .join('-');
  };

  return fake(generator, options);
}
