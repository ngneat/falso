import { rand } from './core';
import { data } from './port.json';

export function port() {
  return rand(data);
}
