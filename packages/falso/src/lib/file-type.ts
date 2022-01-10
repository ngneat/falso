import { rand } from './core';
import { data } from './file-type.json';

export function fileType() {
  return rand(data);
}
