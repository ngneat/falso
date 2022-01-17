import { randLine } from '../lib/line';

describe('line', () => {
  it('should return 5 lines', () => {
    const totalBreaks = randLine().split('\n');

    expect(totalBreaks.length).toEqual(6);
    // 5 lines + 1 empty string as all lines end with '\n'
    expect(totalBreaks[totalBreaks.length - 1]).toEqual('');
  });

  it('should return each line with a full-stop on the end', () => {
    const totalBreaks = randLine().split('\n');

    expect(totalBreaks[0]?.slice(-1)).toEqual('.');
    expect(totalBreaks[1]?.slice(-1)).toEqual('.');
    expect(totalBreaks[2]?.slice(-1)).toEqual('.');
    expect(totalBreaks[3]?.slice(-1)).toEqual('.');
    expect(totalBreaks[4]?.slice(-1)).toEqual('.');
  });

  describe('lineCount passed', () => {
    describe('lineCount of 0', () => {
      it('should thrown min value error', () => {
        const result = () => randLine({ lineCount: 0 });

        expect(result).toThrow('Line count must be greater than 0');
      });
    });

    describe('lineCount is NaN', () => {
      it('should thrown min value error', () => {
        const result = () => randLine({ lineCount: NaN });

        expect(result).toThrow('Line count must be greater than 0');
      });
    });

    describe('lineCount is 1', () => {
      it('should return 1 line', () => {
        const totalBreaks = randLine({ lineCount: 1 }).split('\n');

        expect(totalBreaks.length).toEqual(2);
        // 1 line + 1 empty string as all lines end with '\n'
        expect(totalBreaks[totalBreaks.length - 1]).toEqual('');
      });
    });

    describe('lineCount is 2', () => {
      it('should return 2 line', () => {
        const totalBreaks = randLine({ lineCount: 2 }).split('\n');

        expect(totalBreaks.length).toEqual(3);
        // 1 lines + 1 empty string as all lines end with '\n'
        expect(totalBreaks[totalBreaks.length - 1]).toEqual('');
      });
    });

    describe('lineCount is 5', () => {
      it('should return 5 line', () => {
        const totalBreaks = randLine({ lineCount: 5 }).split('\n');

        expect(totalBreaks.length).toEqual(6);
        // 5 lines + 1 empty string as all lines end with '\n'
        expect(totalBreaks[totalBreaks.length - 1]).toEqual('');
      });
    });

    describe('lineCount is 10', () => {
      it('should return 10 line', () => {
        const totalBreaks = randLine({ lineCount: 10 }).split('\n');

        expect(totalBreaks.length).toEqual(11);
        // 10 lines + 1 empty string as all lines end with '\n'
        expect(totalBreaks[totalBreaks.length - 1]).toEqual('');
      });
    });

    describe('lineCount is 100', () => {
      it('should return 100 line', () => {
        const totalBreaks = randLine({ lineCount: 100 }).split('\n');

        expect(totalBreaks.length).toEqual(101);
        // 101 lines + 1 empty string as all lines end with '\n'
        expect(totalBreaks[totalBreaks.length - 1]).toEqual('');
      });
    });

    describe('lineCount is 500', () => {
      it('should return 500 line', () => {
        const totalBreaks = randLine({ lineCount: 500 }).split('\n');

        expect(totalBreaks.length).toEqual(501);
        // 501 lines + 1 empty string as all lines end with '\n'
        expect(totalBreaks[totalBreaks.length - 1]).toEqual('');
      });
    });
  });

  describe('length param passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randLine({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randLine({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randLine({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });
  });

  describe('length is 3', () => {
    describe('lineCount is passed', () => {
      describe('lineCount is 0', () => {
        it('should thrown min value error', () => {
          const result = () => randLine({ lineCount: 0, length: 3 });

          expect(result).toThrow('Line count must be greater than 0');
        });
      });

      describe('lineCount is NaN', () => {
        it('should thrown min value error', () => {
          const result = () => randLine({ lineCount: NaN, length: 3 });

          expect(result).toThrow('Line count must be greater than 0');
        });
      });

      describe('lineCount is 1', () => {
        it('should return a string array with 3 items, each with 5 lines', () => {
          const randomLines = randLine({ length: 3 });

          // 3 lines + 1 empty string as all lines end with '\n'
          const totalBreaks1 = randomLines[0]?.split('\n');
          expect(totalBreaks1.length).toEqual(6);
          expect(totalBreaks1[totalBreaks1.length - 1]).toEqual('');

          const totalBreaks2 = randomLines[0]?.split('\n');
          expect(totalBreaks2.length).toEqual(6);
          expect(totalBreaks2[totalBreaks2.length - 1]).toEqual('');

          const totalBreaks3 = randomLines[0]?.split('\n');
          expect(totalBreaks3.length).toEqual(6);
          expect(totalBreaks3[totalBreaks3.length - 1]).toEqual('');
        });

        it('should return a string array with 3 items, each line within the array should end with a full-stop', () => {
          const randomLines = randLine({ length: 3 });

          const totalBreaks1 = randomLines[0].split('\n');
          expect(totalBreaks1[0]?.slice(-1)).toEqual('.');
          expect(totalBreaks1[1]?.slice(-1)).toEqual('.');
          expect(totalBreaks1[2]?.slice(-1)).toEqual('.');
          expect(totalBreaks1[3]?.slice(-1)).toEqual('.');
          expect(totalBreaks1[4]?.slice(-1)).toEqual('.');
          const totalBreaks2 = randomLines[1].split('\n');
          expect(totalBreaks2[0]?.slice(-1)).toEqual('.');
          expect(totalBreaks2[1]?.slice(-1)).toEqual('.');
          expect(totalBreaks2[2]?.slice(-1)).toEqual('.');
          expect(totalBreaks2[3]?.slice(-1)).toEqual('.');
          expect(totalBreaks2[4]?.slice(-1)).toEqual('.');
          const totalBreaks3 = randomLines[1].split('\n');
          expect(totalBreaks3[0]?.slice(-1)).toEqual('.');
          expect(totalBreaks3[1]?.slice(-1)).toEqual('.');
          expect(totalBreaks3[2]?.slice(-1)).toEqual('.');
          expect(totalBreaks3[3]?.slice(-1)).toEqual('.');
          expect(totalBreaks3[4]?.slice(-1)).toEqual('.');
        });
      });
    });
  });
});
