import { rand } from './core';
import { data } from './http-method.json';

export function httpMethod() {
  return rand(data);
}
