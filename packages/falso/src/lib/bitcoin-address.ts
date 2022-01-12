import { rand } from './core';
import { data } from './bitcoin-address.i18n.json';

export function bitcoinAddress() {
  return rand(data);
}
