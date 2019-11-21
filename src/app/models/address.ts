import * as uuid from 'uuid';

export class Address {
  constructor(addressString: String) {
    let phrases: String[] = addressString.split(',').map(p => p.trim());
    this.streetNumber = phrases[0].split(' ')[0];
    this.streetName = phrases[0].split(' ').splice(1, phrases[0].length).join(' ');
    this.city = phrases[1];
    this.state = phrases[2].split(' ')[0];
    this.zipCode = phrases[2].split(' ')[1];
    this.id = uuid.v4();
  }
  id: String;
  streetNumber: String;
  streetName: String;
  city: String;
  state: String;
  zipCode: String;
}
