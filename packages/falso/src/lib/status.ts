import { fake, FakeOptions } from './core/core';
import { data } from './status.json';

type Type = 'Project' | 'User Story' | 'Task';

interface StatusOptions extends FakeOptions {
  type?: Type;
}

interface StatusItem {
  status: string;
  type: Type[];
}

/**
 * Generate a random status.
 *
 * @category general
 *
 * @example
 *
 * randStatus()
 *
 * @example
 *
 * randStatus({ type: 'User Story' })
 *
 * @example
 *
 * randStatus({ length: 10 })
 *
 */

export function randStatus<Options extends StatusOptions = never>(
  options?: Options
) {
  const resolved: StatusItem[] = options?.type
    ? (data as StatusItem[]).filter((status) =>
        status.type.includes(options.type!)
      )
    : (data as StatusItem[]);
  const statuses = resolved.map(({ status }) => status).flat();

  return fake(statuses, options);
}
