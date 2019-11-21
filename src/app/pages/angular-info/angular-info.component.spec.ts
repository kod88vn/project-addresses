import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInfoComponent } from './angular-info.component';

describe('AngularInfoComponent', () => {
  let component: AngularInfoComponent;
  let fixture: ComponentFixture<AngularInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
