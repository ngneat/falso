import { v4 as uuidv4 } from 'uuid';
/**
 * Random valid UUID
 */
export function randomUuid(): string {
  return uuidv4();
}
