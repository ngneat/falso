import { fake, FakeOptions, randElement } from './core/core';
import { data } from './file-name.json';

/**
 * Generate a random file name.
 *
 * @category system
 *
 * @example
 *
 * randFileName()
 *
 * @example
 *
 * randFileName({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'markets'
 * 'solid_backing_strategist'
 * 'granite'
 */

export function randFileName<
  Options extends FakeOptions & { extension?: string } = never
>(options?: Options) {
  const ext = options?.extension ?? 'pdf';

  return fake(() => `${randElement(data)}.${ext}`, options);
}
