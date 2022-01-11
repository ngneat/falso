import { between } from './between';

export function recent({ days }: { days: number } = { days: 1 }): Date {
  if (days < 1) {
    throw new Error('days must be positive, use soon() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - daysInMilliseconds);
  return between({ from, to });
}
