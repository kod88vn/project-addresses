import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { AddressesComponent } from './addresses.component';
import { AddressesService } from 'src/app/services/addresses.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AddressesComponent', () => {
  let component: AddressesComponent;
  let fixture: ComponentFixture<AddressesComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, FormsModule, HttpClientTestingModule, NoopAnimationsModule ],
      providers: [ AddressesService ],
      declarations: [ AddressesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesComponent);
    component = fixture.componentInstance;
    const addressesService = fixture.debugElement.injector.get(AddressesService);
    spyOn(addressesService, 'saveAddress').and.returnValue({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defaultOptions', () => {
    component.ngOnInit();
    expect(component.defaultOptions).toBeDefined();
  });

  it('should have tableProps', () => {
    component.ngOnInit();
    expect(component.tableProps).toBeDefined();
  });
});
