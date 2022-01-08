import { rand } from './core';

export function direction() {
  return rand([
    "North",
    "East",
    "South",
    "West",
    "Northeast",
    "Northwest",
    "Southeast",
    "Southwest"
  ]);
}
