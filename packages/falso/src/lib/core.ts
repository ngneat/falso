import { random } from './random';

export function rand<T>(arr: T[]): T {
  return arr[Math.floor(random() * arr.length)];
}
