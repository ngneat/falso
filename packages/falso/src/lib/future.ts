import { between } from './between';

export function future({ years }: { years: number } = { years: 1 }): Date {
  if (years < 0) {
    throw new Error('years must be positive, use past() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + yearsInMilliseconds);
  return between({ from, to });
}
