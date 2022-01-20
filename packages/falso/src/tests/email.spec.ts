import { randEmail } from '@ngneat/falso';

describe('email', () => {
  it('should do a thing', () => {
    // console.log(randEmail({ length: 10 }));
    // console.log(randEmail({ provider: 'btconnect', length: 10 }));
    // console.log(randEmail({ provider: 'btconnect', suffix: 'com', length: 10 }));
    console.log(
      randEmail({
        provider: 'btconnect',
        nameSeparator: '.',
        suffix: 'com',
        length: 10,
      })
    );
  });
});
