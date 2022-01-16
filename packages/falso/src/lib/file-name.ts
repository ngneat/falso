import { FakeOptions, fake } from './core/core';
import { data } from './file-name.json';
import { rand } from './rand';

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
 */
export function randFileName<
  Options extends FakeOptions & { extension?: string }
>(options?: Options) {
  const ext = options?.extension ?? 'pdf';

  return fake(() => `${rand(data)}.${ext}`, options);
}
