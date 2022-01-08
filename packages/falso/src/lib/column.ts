import { rand } from './core';

export function column() {
  return rand([
    "id",
    "title",
    "name",
    "email",
    "phone",
    "token",
    "group",
    "category",
    "password",
    "comment",
    "avatar",
    "status",
    "createdAt",
    "updatedAt"
  ]);
}
