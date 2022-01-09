import { rand } from './core';

export function domainSuffix() {
  return rand(['org', 'biz', 'com', 'net', 'name', 'info']);
}
