import { rand } from './core';
import { data } from './database-collation.i18n.json';

export function databaseCollation() {
  return rand(data);
}
