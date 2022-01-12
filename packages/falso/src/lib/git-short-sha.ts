import { rand } from './core';
import { data } from './git-short-sha.i18n.json';

export function gitShortSha() {
  return rand(data);
}
