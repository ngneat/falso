import { rand } from './core';

export function namePrefix() {
  return rand([
    "Mr.",
    "Mrs.",
    "Ms.",
    "Miss",
    "Dr."
  ]);
}
