import { rand } from './core';
import { data } from './git-short-sha.json';

export function gitShortSha() {
  return rand(data);
}
