import { rand } from './core';

export function nameSuffix() {
  return rand([
    "Jr.",
    "Sr.",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "MD",
    "DDS",
    "PhD",
    "DVM"
  ]);
}
