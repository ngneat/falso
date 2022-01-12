import { rand } from './core';
import { data } from './database-engine.i18n.json';

export function databaseEngine() {
  return rand(data);
}
