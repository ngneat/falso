import { rand } from './core';

export function musicGenre() {
  return rand([
    "Rock",
    "Metal",
    "Pop",
    "Electronic",
    "Folk",
    "World",
    "Country",
    "Jazz",
    "Funk",
    "Soul",
    "Hip Hop",
    "Classical",
    "Latin",
    "Reggae",
    "Stage And Screen",
    "Blues",
    "Non Music",
    "Rap"
  ]);
}
