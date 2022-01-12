import { rand } from './core';
import { data } from './job-type.i18n.json';

export function jobType() {
  return rand(data);
}
