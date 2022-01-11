import { rand } from './core';

export function weekday() {
  return rand([
    'Monday',
    'Tuesday',
    'Wedneday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]);
}
