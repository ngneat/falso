import { fake, FakeOptions } from './core/core';

interface AvatarOptions extends FakeOptions {
  size?: number;
}

/**
 * Generate a random avatar.
 *
 * @category person
 *
 * @example
 *
 * randAvatar()
 *
 * @example
 *
 * randAvatar({ length: 10 })
 *
 * @example
 *
 * randAvatar({ size: 200 }) // default is 100
 *
 */
export function randAvatar<Options extends AvatarOptions = never>(
  options?: Options
) {
  const size = options?.size ?? 100;

  return fake(() => `https://i.pravatar.cc/${size}`, options);
}
