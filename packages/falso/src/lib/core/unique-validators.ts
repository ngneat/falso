export function primitiveValueIsUnique<T>(item: T, items: T[]): boolean {
  return !items.includes(item);
}

export function dateIsUnique(date: Date, dates: Date[]): boolean {
  return !dates.some((d) => d.getTime() === date.getTime());
}

export function objectWithIdIsUnique<T extends { id: string }>(
  item: T,
  items: T[]
): boolean {
  return objectIsUnique(item, items, ['id']);
}

export function objectIsUnique<T extends Record<string, any>>(
  item: T,
  items: T[],
  keys: string[]
): boolean {
  for (const key of keys) {
    if (!(key in item)) {
      throw new Error(`${key} does not exist in this array value type`);
    }

    if (items.some((arrayItem) => arrayItem[key] === item[key])) {
      return false;
    }
  }

  return true;
}
