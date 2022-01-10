import { rand } from './core';
import { data } from './bitcoin-address.json';

export function bitcoinAddress() {
  return rand(data);
}
