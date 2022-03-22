import { random } from '../random';

export interface FakeOptions {
  length?: number;
  priority?: 'length' | 'unique';
}

type Return<T, O extends FakeOptions> = [O] extends [never]
  ? T
  : O['length'] extends number
  ? T[]
  : T;

export function fake<T, Options extends FakeOptions>(
  data: T[] | (() => T),
  options?: Options
): Return<T, Options> {
  if (Array.isArray(data)) {
    return fakeFromArray(data, options) as any;
  }

  return fakeFromFunction(data, options) as any;
}

export function fakeFromFunction<T, Options extends FakeOptions>(
  data: () => T,
  options?: Options
) {
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

    if (!items.includes(item)) {
      items.push(item);
    }

    attempts++;
  }

  return items;
}

export function fakeFromArray<T, Options extends FakeOptions>(
  data: T[],
  options?: Options
) {
  if (!options?.length) {
    return randElement(data);
  }

  const priority = options?.priority ?? 'length';

  if (priority === 'length') {
    return Array.from({ length: options.length }, (_, index) =>
      randElement(data)
    );
  }

  const clonedData: T[] = JSON.parse(JSON.stringify(data));
  const newArray: T[] = [];

  while (clonedData.length && newArray.length !== options.length) {
    const randomIndex = Math.floor(random() * clonedData.length);
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
