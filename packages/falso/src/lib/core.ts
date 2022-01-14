import { random } from './random';

export function rand<T>(arr: T[]): T {
  return arr[Math.floor(random() * arr.length)];
}

export interface FakeOptions {
  length?: number;
}

type Return<T, O extends FakeOptions> = O['length'] extends number ? T[] : T;

export function fake<T, Options extends FakeOptions>(
  data: T[] | ((i: number) => T),
  options?: Options
): Return<T, Options> {
  const dataSource = Array.isArray(data) ? () => rand(data) : data;

  if (!options?.length) {
    return dataSource(0) as any;
  }

  return Array.from({ length: options.length }, (_, index) =>
    dataSource(index)
  ) as any;
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
  return Number((random() * (max - min) + min).toFixed(fraction));
}
