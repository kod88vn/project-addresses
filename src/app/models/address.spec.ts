import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address('nothing, is, good')).toBeTruthy();
  });
});
