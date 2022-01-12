import { rand } from './core';
import { data } from './semver.json';

export function semver() {
  return rand(data);
}
