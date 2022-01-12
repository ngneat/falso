import { rand } from './core';
import { data } from './job-descriptor.i18n.json';

export function jobDescriptor() {
  return rand(data);
}
