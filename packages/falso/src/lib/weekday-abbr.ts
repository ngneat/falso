import { rand } from './core';

export function weekdayAbbr() {
  return rand([
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]);
}
