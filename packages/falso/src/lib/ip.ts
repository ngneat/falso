import { FakeOptions, fake } from './core/core';
import { randNumber } from './number';

const ipRange = { min: 0, max: 255 };

/**
 * Generate a random ip.
 *
 * @category internet
 *
 * @example
 *
 * randIp()
 *
 * @example
 *
 * randIp({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 158.171.28.216
 * 3.235.104.69
 * 84.117.186.118
 */

export function randIp<Options extends FakeOptions = never>(options?: Options) {
  return fake(
    () => Array.from({ length: 4 }, () => randNumber(ipRange)).join('.'),
    options
  );
}
