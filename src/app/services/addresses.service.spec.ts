import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddressesService } from './addresses.service';
import { HttpClient } from '@angular/common/http';
import { Address } from '@app/models/address';

describe('AddressesService', () => {
  let http:any;
  let httpSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spy }],
      imports: [HttpClientTestingModule]
    });
    httpSpy = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    expect(service).toBeTruthy();
    expect(service.getAddresses).toBeDefined();
    expect(service.saveAddress).toBeDefined();
  });

  it('should call http get', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    httpSpy.get.and.returnValue('called');

    service.getAddresses();
    expect(httpSpy.get()).toBe('called');
  });

  it('should call http post', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    httpSpy.post.and.returnValue('called');

    service.saveAddress(new Address('1 street, city, ga, 123456'));
    expect(httpSpy.post()).toBe('called');
  });
});
