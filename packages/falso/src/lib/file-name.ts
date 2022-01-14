import { FakeOptions, fake, rand } from './core';
import { data } from './file-name.json';

export function fileName<Options extends FakeOptions & { extension?: string }>(
  options?: Options
) {
  const ext = options?.extension ?? 'pdf';

  return fake(() => `${rand(data)}.${ext}`, options);
}
