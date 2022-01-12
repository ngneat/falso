import { rand } from './core';
import { data } from './programming-language.json';

export function programmingLanguage() {
  return rand(data);
}
