import { rand } from './core';
import { data } from './database-type.i18n.json';

export function databaseType() {
  return rand(data);
}
