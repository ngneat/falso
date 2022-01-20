import { randEmail, seed } from '@ngneat/falso';
import { NameSeparators } from '../lib/email';

describe('email', () => {
  let validEmailRegex: RegExp;

  beforeEach(() => {
    validEmailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    seed('💻🕸📞');
  });

  it('should return valid email format', () => {
    const result = randEmail();

    expect(result.match(validEmailRegex)).toBeTruthy();
  });

  it('should use random seed to generate all parts of email', () => {
    // This will likely break if new names or email providers are added
    expect(randEmail()).toEqual('jose-antoniojin624@laposte.biz');
    expect(randEmail()).toEqual('sawat+ghosh@juno.org');
    expect(randEmail()).toEqual('zainab_meijer@orange.info');
  });

  describe('nameSeparator is passed', () => {
    let nameSeparator: NameSeparators;

    beforeEach(() => {
      nameSeparator = '.';
    });

    it('should separate first and last name with a fullstop', () => {
      const result = randEmail({ nameSeparator });
      const name = result.split('@')[0];

      expect(name.match('^[a-z]+\\.[a-z]+[1-1000]?')).toBeTruthy();
    });

    it('should return valid email format', () => {
      const result = randEmail({ nameSeparator });

      expect(result.match(validEmailRegex)).toBeTruthy();
    });
  });

  describe('provider is passed', () => {
    let provider: string;

    beforeEach(() => {
      provider = 'testprovider';
    });

    it('should return a random email with passed provider', () => {
      const result = randEmail({ provider });

      expect(result).toContain(`@${provider}.`);
    });

    it('should return valid email format', () => {
      const result = randEmail({ provider });

      expect(result.match(validEmailRegex)).toBeTruthy();
    });
  });

  describe('suffix is passed', () => {
    let suffix: string;

    beforeEach(() => {
      suffix = 'me';
    });

    it('should return valid email format', () => {
      const result = randEmail({ suffix });
      const emailSuffix = result.split('.');

      expect(emailSuffix[emailSuffix.length - 1]).toEqual('me');
    });

    it('should return valid email format', () => {
      const result = randEmail({ suffix });

      expect(result.match(validEmailRegex)).toBeTruthy();
    });
  });

  describe('length is passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randEmail({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randEmail({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randEmail({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      it('should return an array length of 3, each with a random email', () => {
        const result = randEmail({ length: 3 });

        expect(result).toEqual([
          'jose-antoniojin624@laposte.biz',
          'sawat+ghosh@juno.org',
          'zainab_meijer@orange.info',
        ]);
      });
    });
  });
});
