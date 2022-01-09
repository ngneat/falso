import { rand } from './core';

export function direction() {
  return rand([
    'Southwest',
    'North',
    'Northeast',
    'Northwest',
    'South',
    'West',
    'East',
    'Southeast',
  ]);
}
