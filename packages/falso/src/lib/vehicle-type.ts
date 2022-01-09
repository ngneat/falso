import { rand } from './core';

export function vehicleType() {
  return rand([
    'Sedan',
    'Crew Cab Pickup',
    'Minivan',
    'Extended Cab Pickup',
    'Wagon',
    'SUV',
    'Cargo Van',
    'Coupe',
    'Hatchback',
    'Convertible',
    'Passenger Van',
  ]);
}
