import { rand } from './core';
import { data } from './ethereum-address.json';

export function ethereumAddress() {
  return rand(data);
}
