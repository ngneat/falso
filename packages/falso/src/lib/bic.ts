import { rand } from './core';
import { data } from './bic.json';

export function bic() {
  return rand(data);
}
