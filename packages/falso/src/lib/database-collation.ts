import { rand } from './core';

export function databaseCollation() {
  return rand([
    'utf8_unicode_ci',
    'cp1250_general_ci',
    'cp1250_bin',
    'utf8_general_ci',
    'ascii_general_ci',
    'utf8_bin',
    'ascii_bin',
  ]);
}
