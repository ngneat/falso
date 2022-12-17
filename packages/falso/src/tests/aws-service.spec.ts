import { randAwsService } from '../lib/aws-service';

describe('randAwsService', () => {
  it('should create a service', () => {
    const service = randAwsService();

    expect(service).toBeTruthy();
    expect(typeof service).toEqual('string');
    expect(service.length).toBeGreaterThan(0);
  });

  it('should create a service with length', () => {
    const RESULT_LENGTH = 5;
    const services = randAwsService({ length: RESULT_LENGTH });

    expect(services).toBeTruthy();
    expect(typeof services).toEqual('object');
    expect(services.length).toEqual(RESULT_LENGTH);
  });
});
