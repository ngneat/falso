import { FakeOptions, fake } from './core';

interface AvatarOptions extends FakeOptions {
  size: number;
}

export function avatar<Options extends AvatarOptions>(options?: Options) {
  const size = options?.size || 300;

  return fake(() => `https://i.pravatar.cc/${size}`, options);
}
