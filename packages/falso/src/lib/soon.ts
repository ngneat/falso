import { between } from './between';

export function soon({ days }: { days: number } = { days: 1 }): Date {
  if (days < 1) {
    throw new Error('days must be positive, use recent() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + daysInMilliseconds);
  return between({ from, to });
}
