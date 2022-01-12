import { rand } from './core';
import { data } from './git-commit-message.i18n.json';

export function gitCommitMessage() {
  return rand(data);
}
