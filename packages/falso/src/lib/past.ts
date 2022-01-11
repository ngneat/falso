import { between } from './between';

export function past({ years }: { years: number } = { years: 1 }): Date {
  if (years < 0) {
    throw new Error('years must be positive, use future() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - yearsInMilliseconds);
  return between({ from, to });
}
