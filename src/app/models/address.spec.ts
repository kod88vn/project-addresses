import { Address } from './address';

describe('Address', () => {
  it('should create the right address', () => {
    const { streetNumber, streetName, city, state, zipCode } = new Address('1 Jesse Hill Jr Street, Atlanta, TN 30309');
    expect(streetNumber).toBe('1');
    expect(streetName).toBe('Jesse Hill Jr Street');
    expect(city).toBe('Atlanta');
    expect(state).toBe('TN');
    expect(zipCode).toBe('30309');
  });
});
