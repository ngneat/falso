import { between } from './between';
import { fake } from './core';

interface FutureOptions {
  years: number;
}

export function future<Options extends FutureOptions>(
  { years, ...options }: FutureOptions = { years: 1 }
): Date {
  if (years < 0) {
    throw new Error('years must be positive, use past() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + yearsInMilliseconds);
  return fake(() => between({ from, to }), options);
}
