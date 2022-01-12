import { rand } from './core';
import { data } from './database-column.i18n.json';

export function databaseColumn() {
  return rand(data);
}
