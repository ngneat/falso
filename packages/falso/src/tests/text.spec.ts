import { randText } from '../lib/text';

describe('text', () => {
  it('should end with a full-stop', () => {
    const result = randText();

    expect(result?.slice(-1)).toEqual('.');
  });

  describe('length param NOT passed', () => {
    describe('charCount is passed', () => {
      describe('charCount of 0', () => {
        it('should thrown min value error', () => {
          const result = () => randText({ charCount: 0 });

          expect(result).toThrow('Character count must be greater than 0');
        });
      });

      describe('charCount is NaN', () => {
        it('should thrown min value error', () => {
          const result = () => randText({ charCount: NaN });

          expect(result).toThrow('Character count must be greater than 0');
        });
      });

      describe('charCount is 1', () => {
        it('should return a string with 1 character', () => {
          const result = randText({ charCount: 1 });

          expect(result?.length).toEqual(1);
        });

        it('should not end with a full-stop', () => {
          const result = randText({ charCount: 1 });

          expect(result?.slice(-1)).not.toEqual('.');
        });
      });

      describe('charCount is 100', () => {
        it('should return a string with 100 characters', () => {
          const result = randText({ charCount: 100 });

          expect(result?.length).toEqual(100);
        });
      });

      describe('charCount is 5000', () => {
        it('should return a string with 5000 characters', () => {
          const result = randText({ charCount: 5000 });

          expect(result?.length).toEqual(5000);
        });
      });
    });

    describe('charCount is NOT passed', () => {
      it('should return a string with 10 characters', () => {
        const result = randText();

        expect(result?.length).toEqual(10);
      });
    });
  });

  describe('length param passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randText({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randText({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randText({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      describe('charCount is passed', () => {
        describe('charCount is 0', () => {
          it('should thrown min value error', () => {
            const result = () => randText({ charCount: 0, length: 3 });

            expect(result).toThrow('Character count must be greater than 0');
          });
        });

        describe('charCount is NaN', () => {
          it('should thrown min value error', () => {
            const result = () => randText({ charCount: NaN, length: 3 });

            expect(result).toThrow('Character count must be greater than 0');
          });
        });

        describe('charCount is 1', () => {
          it('should return a string array with 3 items, each with 1 character long', () => {
            const result = randText({ charCount: 1, length: 3 });

            expect(result?.[0]?.length).toEqual(1);
            expect(result?.[1]?.length).toEqual(1);
            expect(result?.[2]?.length).toEqual(1);
          });

          it('should return a string array with 3 items, each should not end with a full-stop', () => {
            const result = randText({ charCount: 1 });

            expect(result?.[0]?.slice(-1)).not.toEqual('.');
            expect(result?.[1]?.slice(-1)).not.toEqual('.');
            expect(result?.[2]?.slice(-1)).not.toEqual('.');
          });
        });

        describe('charCount is 100', () => {
          it('should return a string array with 3 items, each with 100 character long', () => {
            const result = randText({ charCount: 100, length: 3 });

            expect(result?.[0]?.length).toEqual(100);
            expect(result?.[1]?.length).toEqual(100);
            expect(result?.[2]?.length).toEqual(100);
          });
        });

        describe('charCount is 5000', () => {
          it('should return a string array with 3 items, each with 5000 character long', () => {
            const result = randText({ charCount: 5000, length: 3 });

            expect(result?.[0]?.length).toEqual(5000);
            expect(result?.[1]?.length).toEqual(5000);
            expect(result?.[2]?.length).toEqual(5000);
          });
        });
      });

      describe('charCount is NOT passed', () => {
        it('should return a string array with 3 items, each with 10 character long', () => {
          const result = randText({ length: 3 });

          expect(result?.[0]?.length).toEqual(10);
          expect(result?.[1]?.length).toEqual(10);
          expect(result?.[2]?.length).toEqual(10);
        });
      });
    });
  });
});
