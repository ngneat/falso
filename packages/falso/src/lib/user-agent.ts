import { rand } from './core';
import { data } from './user-agent.json';

export function userAgent() {
  return rand(data);
}
