import { rand } from './core';
import { data } from './job-title.i18n.json';

export function jobTitle() {
  return rand(data);
}
