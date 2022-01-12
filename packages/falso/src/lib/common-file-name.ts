import { rand } from './core';
import { data } from './common-file-name.json';

export function commonFileName() {
  return rand(data);
}
