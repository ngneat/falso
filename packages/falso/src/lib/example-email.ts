import { rand } from './core';
import { data } from './example-email.i18n.json';

export function exampleEmail() {
  return rand(data);
}
