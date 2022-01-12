import { rand } from './core';
import { data } from './ethereum-address.i18n.json';

export function ethereumAddress() {
  return rand(data);
}
