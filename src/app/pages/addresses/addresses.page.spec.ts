import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddressesService } from 'src/app/services/addresses.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialModule } from '@app/material.module';
import { AddressesPage } from './addresses.page';
import { AddressesComponent } from '@app/components/addresses/addresses.component';

describe('AddressesPage', () => {
  let component: AddressesPage;
  let fixture: ComponentFixture<AddressesPage>;
  let addressesService:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesPage, AddressesComponent ],
      providers: [ AddressesService ],
      imports: [MaterialModule, FormsModule, HttpClientTestingModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesPage);
    component = fixture.componentInstance;
    addressesService = fixture.debugElement.injector.get(AddressesService);
    spyOn(addressesService, 'getAddresses').and.returnValue([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get address', () => {
    component.ngOnInit();
    expect(addressesService.getAddresses).toHaveBeenCalled();
  });
});
