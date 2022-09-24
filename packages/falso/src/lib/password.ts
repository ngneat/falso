import { fake, FakeOptions } from './core/core';
import { randSequence } from './sequence';

export interface PasswordOptions extends FakeOptions {
  size?: number;
}

/**
 * Generate a random password.
 *
 * @category person
 *
 * @example
 *
 * randPassword()
 *
 * @example
 *
 * randPassword({ size: 10 }) // default is 15
 *
 * @example
 *
 * randPassword({ length: 10 })
 *
 * @example
 *
 * randPassword({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randPassword<Options extends PasswordOptions = never>(
  options?: Options
) {
  const size = options?.size || 15;

  return fake(() => randSequence({ size }), options);
}
