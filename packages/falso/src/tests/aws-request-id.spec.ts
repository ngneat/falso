import { randAwsRequestId } from '../lib/aws-request-id';

describe('aws request id', () => {
  it('should create one random request id', () => {
    const randomRequestId = randAwsRequestId();

    const requestIdRegex = /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/;

    expect(randomRequestId).toBeTruthy();
    expect(typeof randomRequestId).toEqual('string');
    expect(requestIdRegex.test(randomRequestId)).toBeTruthy();
  });

  it('should create multiple random binary numbers', () => {
    const RESULT_LENGTH = 10;
    const randomIds = randAwsRequestId({ length: RESULT_LENGTH });

    expect(randomIds).toBeTruthy();
    expect(Array.isArray(randomIds)).toBeTruthy();
    expect(randomIds.length).toEqual(RESULT_LENGTH);
  });
});
