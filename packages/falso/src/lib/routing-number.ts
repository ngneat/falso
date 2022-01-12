import { rand } from './core';
import { data } from './routing-number.json';

export function routingNumber() {
  return rand(data);
}
