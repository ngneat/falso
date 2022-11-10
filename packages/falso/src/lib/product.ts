import { FakeOptions, fake, getRandomInRange } from './core/core';
import { randUuid } from './uuid';
import { randProductName } from './product-name';
import { randProductDescription } from './product-description';
import { randProductCategory } from './product-category';
import { randImg } from './img';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: string;
  };
}

/**
 * Generate a random product.
 *
 * @category entities
 *
 * @example
 *
 * randProduct()
 *
 * @example
 *
 * randProduct({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Chair'
 * 'Soap'
 * 'Sausages'
 */

export function randProduct<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () => ({
      id: randUuid(),
      title: randProductName(),
      description: randProductDescription(),
      price: getRandomInRange({ fraction: 2 }).toString(),
      category: randProductCategory(),
      image: randImg(),
      rating: {
        rate: getRandomInRange({ min: 0.1, max: 5.0, fraction: 1 }).toString(),
        count: getRandomInRange({ min: 0, max: 10000 }).toString(),
      },
    }),
    options
  );
}
