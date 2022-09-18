import { User } from '@ngneat/falso';

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
  keys: (keyof T)[]
): boolean {
  for (const key of keys) {
    if (items.some((arrayItem) => arrayItem[key] === item[key])) {
      return false;
    }
  }

  return true;
}
