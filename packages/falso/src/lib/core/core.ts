import { random } from '../random';
import { isString } from '../utils/validators.utils';

export interface FakeOptions {
  length?: number;
  locale?: any | string[];
  maxCharCount?: number;
}

export type markRequired<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

export type Return<T, O extends FakeOptions> = [O] extends [never]
  ? T
  : O['length'] extends number
  ? T[]
  : T;

type FactoryFunction<T> = (i: number) => T;

export function fake<T, Options extends FakeOptions>(
  data: Readonly<T[]> | FactoryFunction<T>,
  options?: Options
): Return<T, Options> {
  let dataSource = data as FactoryFunction<T>;
  if (Array.isArray(data)) {
    let resolvedData = data;
    if (options?.maxCharCount && isString(data[0])) {
      resolvedData = data.filter(
        (item) => item.length <= options.maxCharCount!
      );
    }
    dataSource = () => randElement(resolvedData);
  }

  if (options?.length === undefined) {
    return dataSource(0) as any;
  }

  return Array.from({ length: options.length }, (_, index) =>
    dataSource(index)
  ) as any;
}

export function randElement<T>(arr: Readonly<T[]>) {
  return arr[Math.floor(random() * arr.length)];
}

export interface RandomInRangeOptions {
  min?: number;
  max?: number;
  fraction?: number;
}

export function getRandomInRange({
  min = 1.0,
  max = 9999.99,
  fraction = 0,
}: RandomInRangeOptions = {}) {
  if (max < min) {
    throw new Error('Max must be bigger than min');
  }
  return Number((random() * (max - min) + min).toFixed(fraction));
}
