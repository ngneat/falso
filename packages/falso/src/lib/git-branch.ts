import { rand } from './core';
import { data } from './git-branch.i18n.json';

export function gitBranch() {
  return rand(data);
}
