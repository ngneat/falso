import { FakeOptions, fake } from './core/core';
import { data } from './lines.json';

/**
 * Generate a random lines.
 *
 * @category text
 *
 * @example
 *
 * randLines()
 *
 * @example
 *
 * randLines({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Commodi est rerum dolorum quae voluptatem aliquam.'
 * 'Minima qui ut nulla eius.\\nA incidunt ipsum tempore porro tempore.\\nFugit quas voluptas ducimus aut.\\nTempore nostrum velit expedita voluptate est.\\nNam iste explicabo tempore impedit voluptas.'
 * 'Dolorem sed neque sequi ad nulla.\\nEum tempora ut sit et ducimus.\\nVel a expedita dignissimos.\\nFacilis iste ut.\\nAd saepe doloremque possimus mollitia atque explicabo.'
 */

export function randLines<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
