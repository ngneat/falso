import { randAlphaNumeric } from './alpha-numeric';
import { fake, FakeOptions } from './core/core';

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
 * @example
 *
 * randAwsRequestId({ length: 10, priority: 'unique' }) // default priority is 'length'
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
