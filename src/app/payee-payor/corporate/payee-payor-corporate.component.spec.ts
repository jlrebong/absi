import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeePayorCorporateComponent } from './payee-payor-corporate.component';

describe('PayeePayorCorporateComponent', () => {
  let component: PayeePayorCorporateComponent;
  let fixture: ComponentFixture<PayeePayorCorporateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayeePayorCorporateComponent]
    });
    fixture = TestBed.createComponent(PayeePayorCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
