import { rand } from './core';
import { data } from './litecoin-address.json';

export function litecoinAddress() {
  return rand(data);
}
