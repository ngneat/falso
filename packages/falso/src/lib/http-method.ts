import { rand } from './core';

export function httpMethod() {
  return rand(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
}
