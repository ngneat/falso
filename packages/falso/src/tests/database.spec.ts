import { randDatabase } from '../lib/database';

describe('randDatabase', () => {
  it('should create a database', () => {
    const database = randDatabase();

    expect(database).toBeTruthy();
    expect(typeof database).toEqual('string');
    expect(database.length).toBeGreaterThan(0);
  });
});
