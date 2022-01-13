import { between } from './between';
import { fake, FakeOptions } from './core';

interface RecentOptions extends FakeOptions {
  days: number;
}

export function recent<Options extends RecentOptions>(
  { days, ...options }: RecentOptions = { days: 1 }
): Date {
  if (days < 1) {
    throw new Error('days must be positive, use soon() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - daysInMilliseconds);
  return fake(() => between({ from, to }), options);
}
