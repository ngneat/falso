import { femaleFirstName, maleFirstName } from '..';
import { rand } from './core';

export function firstName() {
  return rand([femaleFirstName(), maleFirstName()]);
}
