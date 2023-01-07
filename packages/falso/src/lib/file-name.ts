import { fake, FakeOptions, randElement } from './core/core';
import { data } from './file-name.json';

interface FileNameOptions extends FakeOptions {
  extension?: string;
}

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
export function randFileName<Options extends FileNameOptions = never>(
  options?: Options
) {
  const ext = options?.extension ?? 'pdf';

  return fake(() => `${randElement(data)}.${ext}`, options);
}
