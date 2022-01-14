import { sentence } from '@ngneat/falso';

describe('sentence', () => {
  it('should start with a capital letter', () => {
    const result = sentence();
    const firstChar = result.charAt(0);

    expect(firstChar).toEqual(firstChar.toUpperCase());
  });

  it('should end with a full-stop', () => {
    const result = sentence();

    expect(result?.slice(-1)).toEqual('.');
  });

  describe('length param passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = sentence({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = sentence({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = sentence({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      it('should return a string array with 3 items, each starting with a capital letter', () => {
        const result = sentence({ length: 3 });

        expect(result[0]?.charAt(0)).toEqual(
          result[0]?.charAt(0).toUpperCase()
        );
        expect(result[1]?.charAt(0)).toEqual(
          result[1]?.charAt(0).toUpperCase()
        );
        expect(result[2]?.charAt(0)).toEqual(
          result[2]?.charAt(0).toUpperCase()
        );
      });

      it('should return a string array with 3 items, each ending with a full-stop', () => {
        const result = sentence({ length: 3 });

        expect(result[0]?.slice(-1)).toEqual('.');
        expect(result[1]?.slice(-1)).toEqual('.');
        expect(result[2]?.slice(-1)).toEqual('.');
      });
    });
  });
});
