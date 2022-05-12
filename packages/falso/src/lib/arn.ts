import { randAccount } from './account';
import { randAwsRegion } from './aws-region';
import { fake, FakeOptions } from './core/core';
import { randDirectoryPath } from './directory-path';
import { randFileName } from './file-name';
import { randNumber } from './number';

const partitions = ['aws', 'aws-cn', 'aws-us-gov'];
const services = ['s3', 'sqs', 'lambda', 'iam'];
const serviceArn: Record<string, () => string> = {
  s3: () => `::${randDirectoryPath()}/*`,
  iam: () => `:${randAccount()}:${fake(['user', 'group'])}/*`,
  sqs: () =>
    `${randAwsRegion()}:${randAccount()}:queue${randNumber({
      min: 1,
      max: 10,
    })}`,
  lambda: () =>
    `${randAwsRegion()}:${randAccount()}:function:${randFileName().replace(
      /_/g,
      '-'
    )}`,
};

/**
 * Generate a random ARN.
 *
 * @category AWS
 *
 * @example
 *
 * randArn()
 *
 * @example
 *
 * randArn({ length: 10 })
 *
 * @example
 *
 * randArn({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randArn<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    const partition = fake(partitions);
    const service = fake(services);

    return `arn:${partition}:${service}:${serviceArn[service]()}`;
  }, options);
}
