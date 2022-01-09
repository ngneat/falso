import { rand } from './core';

export function vehicleFuel() {
  return rand(['Gasoline', 'Hybrid', 'Electric', 'Diesel']);
}
