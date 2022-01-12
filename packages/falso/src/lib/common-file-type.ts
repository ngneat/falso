import { rand } from './core';
import { data } from './common-file-type.json';

export function commonFileType() {
  return rand(data);
}
