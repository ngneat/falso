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
 * @example
 *
 * randFileName({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randFileName<
  Options extends FakeOptions & { extension?: string } = never
>(options?: Options) {
  const ext = options?.extension ?? 'pdf';

  return fake(() => `${randElement(data)}.${ext}`, options);
}
