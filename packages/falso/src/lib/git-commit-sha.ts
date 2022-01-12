import { rand } from './core';
import { data } from './git-commit-sha.i18n.json';

export function gitCommitSha() {
  return rand(data);
}
