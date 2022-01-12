import { rand } from './core';
import { data } from './bic.i18n.json';

export function bic() {
  return rand(data);
}
