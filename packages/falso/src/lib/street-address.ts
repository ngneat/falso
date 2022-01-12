import { rand } from './core';
import { data } from './street-address.json';

export function streetAddress() {
  return rand(data);
}
