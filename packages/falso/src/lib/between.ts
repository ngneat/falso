import { fake, FakeOptions } from './core';

interface BetweenOptions extends FakeOptions {
  from: Date;
  to: Date;
}

export function between<Options extends BetweenOptions>({
  from,
  to,
  ...options
}: BetweenOptions) {
  if (from.getTime() >= to.getTime()) {
    throw new Error('from must be before to');
  }

  const data = new Date(
    Math.floor(Math.random() * (to.getTime() - from.getTime())) + from.getTime()
  );
  return fake(() => data, options);
}
