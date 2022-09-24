import { FakeOptions, fake } from './core/core';
import { data } from './status.json';

type Type = 'Project' | 'User Story' | 'Task';

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
 * @example
 *
 * randStatus({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */

export function randStatus<
  Options extends FakeOptions & {
    type?: Type;
  } = never
>(options?: Options) {
  let statuses: string[];

  if (options?.type) {
    const filteredStatuses = data.filter((status) => {
      return status.type.includes(options.type!);
    });
    statuses = filteredStatuses.map(({ status }) => status).flat() || [];
  } else {
    statuses = data.map(({ status }) => status).flat();
  }

  return fake(statuses, options);
}
