import { rand } from './core';

export function databaseEngine() {
  return rand([
    "InnoDB",
    "MyISAM",
    "MEMORY",
    "CSV",
    "BLACKHOLE",
    "ARCHIVE"
  ]);
}
