import { FakeOptions, fake } from './core/core';
import { data } from './product-description.json';

/**
 * Generate a random product description.
 *
 * @category Commerce
 *
 * @example
 *
 * randProductDescription()
 *
 * @example
 *
 * randProductDescription({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Bostons most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles'
 * 'The Football Is Good For Training And Recreational Purposes'
 * 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016'
 */

export function randProductDescription<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
