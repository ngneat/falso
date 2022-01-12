import { rand } from './core';
import { data } from './git-commit-message.json';

export function gitCommitMessage() {
  return rand(data);
}
