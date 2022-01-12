import { rand } from './core';
import { data } from './semver.i18n.json';

export function semver() {
  return rand(data);
}
