import * as generators from './index';

class Falso {
  [key: string]: any;

  constructor() {
    // Optionally, allow for custom seeding or config here
  }
}

// Attach all generator functions to the Falso prototype
Object.entries(generators).forEach(([key, fn]) => {
  if (typeof fn === 'function') {
    Falso.prototype[key] = fn;
  }
});

export { Falso };
export const falso = new Falso();
