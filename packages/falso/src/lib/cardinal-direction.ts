import { rand } from './core';

export function cardinalDirection() {
  return rand(['East', 'South', 'West', 'North']);
}
