import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageeComponent } from './mortgagee.component';

describe('MortgageeComponent', () => {
  let component: MortgageeComponent;
  let fixture: ComponentFixture<MortgageeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageeComponent]
    });
    fixture = TestBed.createComponent(MortgageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
