import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeePayorIndividualComponent } from './payee-payor-individual.component';

describe('PayeePayorIndividualComponent', () => {
  let component: PayeePayorIndividualComponent;
  let fixture: ComponentFixture<PayeePayorIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayeePayorIndividualComponent]
    });
    fixture = TestBed.createComponent(PayeePayorIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
