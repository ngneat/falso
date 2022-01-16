import { randTodo } from '../lib/todo';

describe('todo', () => {
  it('should create a todo', () => {
    const todo = randTodo();

    expect(typeof todo.title).toEqual('string');
    expect(typeof todo.id).toEqual('string');
    expect(typeof todo.completed).toEqual('boolean');
  });
});
