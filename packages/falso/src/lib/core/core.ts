import { random } from '../random';
import { primitiveValueIsUnique } from './unique-validators';

export interface FakeOptions {
  length?: number;
  priority?: 'length' | 'unique';
}

export interface FakeConfig<T> {
  uniqueComparer: (
    item: T,
    items: T[],
    comparisonKeys?: string[]
  ) => boolean | ((item: T, items: T[]) => boolean);
  comparisonKeys?: string[];
}

type Return<T, O extends FakeOptions> = [O] extends [never]
  ? T
  : O['length'] extends number
  ? T[]
  : T;

export function fake<T, Options extends FakeOptions>(
  data: T[] | (() => T),
  options?: Options,
  config: FakeConfig<T> = {
    uniqueComparer: primitiveValueIsUnique,
  }
): Return<T, Options> {
  if (options?.length === 0) {
    return [] as any;
  }

  if (Array.isArray(data)) {
    return fakeFromArray(data, options) as any;
  }

  return fakeFromFunction(data, config, options) as any;
}

export function fakeFromFunction<T, Options extends FakeOptions>(
  data: () => T,
  config: FakeConfig<T>,
  options?: Options
): T | T[] {
  if (!options?.length) {
    return data();
  }

  const priority = options?.priority ?? 'length';

  if (priority === 'length') {
    return Array.from({ length: options.length }, (_, index) => data());
  }

  const items: T[] = [];

  let attempts = 0;
  const maxAttempts = options.length * 2;

  while (items.length < options.length && attempts < maxAttempts) {
    const item = data();

    if (!config.uniqueComparer(item, items, config.comparisonKeys)) {
      items.push(item);
    }

    attempts++;
  }

  return items;
}

export function fakeFromArray<T, Options extends FakeOptions>(
  data: T[],
  options?: Options
): T | T[] {
  if (!options?.length) {
    return randElement(data);
  }

  const priority = options?.priority ?? 'length';

  if (priority === 'length') {
    return Array.from({ length: options.length }, () => randElement(data));
  }

  const clonedData: T[] = JSON.parse(JSON.stringify(data));
  const newArray: T[] = [];

  while (clonedData.length && newArray.length !== options.length) {
    const randomIndex = getRandomInRange({
      min: 0,
      max: clonedData.length - 1,
    });
    const item = clonedData[randomIndex];

    newArray.push(item);
    clonedData.splice(randomIndex, 1);
  }

  return newArray;
}

export function randElement<T>(arr: T[]): T {
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
  return Number((random() * (max - min) + min).toFixed(fraction));
}
