import { FakeOptions, fake } from './core/core';
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
 * randPassword({ length: 10 })
 *
 * @example
 *
 * randPassword({ size: 10 })
 *
 */
export function randPassword<Options extends PasswordOptions>(
  options?: Options
) {
  const size = options?.size || 15;

  return fake(() => randSequence({ size }), options);
}
