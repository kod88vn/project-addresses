import { Address } from '@app/models/address';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddressesService {

  constructor(private httpClient: HttpClient) { }

  getAddresses(): Promise<any> {
    const url = `https://0f1c6e64.s3.amazonaws.com/addresses.txt`;
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.get(url, { responseType: 'text'}).subscribe(
          (res: any) => {
            resolve(res.split('\n').map(a => new Address(a)));
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  saveAddress(address:Address): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.post('https://somewhere-outthere', address).subscribe(
          (res: any) => {
            resolve();
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }
}
