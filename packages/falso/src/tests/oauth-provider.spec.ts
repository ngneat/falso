import { randOAuthProvider } from '../lib/oauth-provider';

describe('oauthProvider', () => {
  it('should create', () => {
    expect(randOAuthProvider).toBeTruthy();
  });
});
