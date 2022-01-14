import { FakeOptions, fake } from './core/core';

interface AvatarOptions extends FakeOptions {
  size?: number;
}

/**
 * Generate a random avatar.
 *
 * @category TBD
 *
 * @example
 *
 * avatar()
 *
 * @example
 *
 * avatar({ length: 10 })
 *
 */
export function avatar<Options extends AvatarOptions>(options?: Options) {
  const size = options?.size ?? 100;

  return fake(() => `https://i.pravatar.cc/${size}`, options);
}
