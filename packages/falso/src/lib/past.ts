import { between } from './between';
import { fake, FakeOptions } from './core';

interface PastOptions extends FakeOptions {
  years: number;
}

export function past<Options extends PastOptions>(options?: Options) {
  const years = options?.years ?? 1;

  if (years < 0) {
    throw new Error('years must be positive, use future() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - yearsInMilliseconds);

  return fake(() => between({ from, to }), options);
}
