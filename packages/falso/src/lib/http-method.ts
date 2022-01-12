import { rand } from './core';
import { data } from './http-method.i18n.json';

export function httpMethod() {
  return rand(data);
}
