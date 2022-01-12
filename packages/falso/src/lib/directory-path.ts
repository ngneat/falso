import { rand } from './core';
import { data } from './directory-path.i18n.json';

export function directoryPath() {
  return rand(data);
}
