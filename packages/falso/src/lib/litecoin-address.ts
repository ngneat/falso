import { rand } from './core';
import { data } from './litecoin-address.i18n.json';

export function litecoinAddress() {
  return rand(data);
}
