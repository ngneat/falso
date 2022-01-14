import { FakeOptions, fake } from './core/core';
import { data } from './file-name.json';
import { rand } from './rand';

/**
 * Generate a random file-name.
 *
 * @category TBD
 *
 * @example
 *
 * fileName()
 *
 * @example
 *
 * fileName({ length: 10 })
 *
 */
export function fileName<Options extends FakeOptions & { extension?: string }>(
  options?: Options
) {
  const ext = options?.extension ?? 'pdf';

  return fake(() => `${rand(data)}.${ext}`, options);
}
