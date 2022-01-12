import { rand } from './core';
import { data } from './git-branch.json';

export function gitBranch() {
  return rand(data);
}
