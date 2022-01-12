import { rand } from './core';
import { data } from './user-agent.i18n.json';

export function userAgent() {
  return rand(data);
}
