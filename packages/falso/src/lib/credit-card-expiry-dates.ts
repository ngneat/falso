import { rand } from './core';

export function creditCardExpiryDates() {
  return rand([
    "2011-10-12",
    "2012-11-12",
    "2015-11-11",
    "2013-9-12"
  ]);
}
