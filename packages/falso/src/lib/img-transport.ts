import { rand } from './core';
import { data } from './img-transport.i18n.json';

export function imgTransport() {
  return rand(data);
}
