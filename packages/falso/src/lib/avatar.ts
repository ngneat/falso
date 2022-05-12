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
 * randAvatar({ size: 200 }) // default is 100
 *
 * @example
 *
 * randAvatar({ length: 10 })
 *
 * @example
 *
 * randAvatar({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randAvatar<Options extends AvatarOptions = never>(
  options?: Options
) {
  const size = options?.size ?? 100;

  return fake(() => `https://i.pravatar.cc/${size}`, options);
}
