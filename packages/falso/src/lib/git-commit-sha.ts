import { rand } from './core';
import { data } from './git-commit-sha.json';

export function gitCommitSha() {
  return rand(data);
}
