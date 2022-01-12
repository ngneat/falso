import { rand } from './core';
import { data } from './example-email.json';

export function exampleEmail() {
  return rand(data);
}
