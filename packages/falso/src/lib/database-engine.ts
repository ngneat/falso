import { rand } from './core';

export function databaseEngine() {
  return rand(['CSV', 'ARCHIVE', 'MyISAM', 'MEMORY', 'InnoDB', 'BLACKHOLE']);
}
