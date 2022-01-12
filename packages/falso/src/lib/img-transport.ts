import { rand } from './core';
import { data } from './img-transport.json';

export function imgTransport() {
  return rand(data);
}
