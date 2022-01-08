import { rand } from './core';

export function creditCardTypes() {
  return rand([
    "visa",
    "mastercard",
    "americanexpress",
    "discover"
  ]);
}
