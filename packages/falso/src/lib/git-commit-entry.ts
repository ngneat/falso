import { rand } from './core';
import { data } from './git-commit-entry.i18n.json';

export function gitCommitEntry() {
  return rand(data);
}
