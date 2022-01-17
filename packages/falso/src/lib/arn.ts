import { fake, FakeOptions } from './core/core';
import {
  randAccount,
  randAwsRegion,
  randDirectoryPath,
  randFileName,
  randNumber,
} from '@ngneat/falso';

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
 */
export function randArn<Options extends FakeOptions>(options?: Options) {
  return fake(() => {
    const partition = fake(partitions);
    const service = fake(services);

    return `arn:${partition}:${service}:${serviceArn[service]()}`;
  }, options);
}
