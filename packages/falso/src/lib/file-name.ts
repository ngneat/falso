import { rand } from './core';
import { data } from './file-name.json';

export function fileName() {
  return rand(data);
}
