import { firstName } from '..';
import { rand } from './core';

const postfixes = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com"
]

export function email() {
  return `${firstName().toLowerCase()}@${rand(postfixes)}`;
}
