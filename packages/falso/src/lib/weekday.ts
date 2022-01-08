import { rand } from './core';

export function weekday() {
  return rand([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]);
}
