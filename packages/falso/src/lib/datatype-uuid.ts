import { rand } from './core';
import { data } from './datatype-uuid.i18n.json';

export function datatypeUuid() {
  return rand(data);
}
