import { randChanceBoolean } from '../lib/chance-boolean';

describe('chanceBoolean', () => {
  it('should create', () => {
    expect(randChanceBoolean).toBeTruthy();
  });

  it.each([0.15, 0.5, 0.75])(
    'should follow percentage on chanceTrue',
    (percent) => {
      let truthy = 0;

      for (let i = 0; i < 10e5; i++) {
        if (randChanceBoolean({ chanceTrue: percent })) {
          truthy++;
        }
      }

      expect(Math.round((truthy / 10e5) * 100)).toBe(percent * 100);
    }
  );

  it.each([0.15, 0.5, 0.75])(
    'should follow percentage on changeFalse',
    (percent) => {
      let falsy = 0;

      for (let i = 0; i < 10e5; i++) {
        if (!randChanceBoolean({ chanceFalse: percent })) {
          falsy++;
        }
      }

      expect(Math.round((falsy / 10e5) * 100)).toBe(percent * 100);
    }
  );
});
