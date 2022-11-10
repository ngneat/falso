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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 788k7v21-fa9h-0y1h-x6l8-rs8dpe1efc4y
 * 5s3mlim3-737x-8ol6-d282-mg88umn271x5
 * nm1dvo6p-uuj3-1l62-e131-lu249e634825
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
