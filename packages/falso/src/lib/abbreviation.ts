import { fake, FakeOptions } from './core/core';
import { data } from './abbreviation.json';

/**
 * Generate a random abbreviation.
 *
 * @category text
 *
 * @example
 *
 * randAbbreviation()
 *
 * @example
 *
 * randAbbreviation({ length: 10 })
 * 
 * @automaticallyGeneratedExamples
 * @example
 * SCSI
 * SMTP
 * ADP
 */
export function randAbbreviation<O extends FakeOptions = never>(options?: O) {
  return fake(data, options);
}
