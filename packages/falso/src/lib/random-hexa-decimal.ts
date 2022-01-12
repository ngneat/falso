import { rand } from './core';
import { data } from './random-hexa-decimal.json';

export function randomHexaDecimal() {
  return rand(data);
}
