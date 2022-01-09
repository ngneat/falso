import { rand } from './core';

export function productMaterial() {
  return rand([
    'Metal',
    'Plastic',
    'Rubber',
    'Frozen',
    'Soft',
    'Concrete',
    'Granite',
    'Fresh',
    'Steel',
    'Cotton',
    'Wooden',
  ]);
}
