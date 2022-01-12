import { rand } from './core';
import { data } from './random-hexa-decimal.i18n.json';

export function randomHexaDecimal() {
  return rand(data);
}
