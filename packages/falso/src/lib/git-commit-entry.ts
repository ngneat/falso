import { rand } from './core';
import { data } from './git-commit-entry.json';

export function gitCommitEntry() {
  return rand(data);
}
