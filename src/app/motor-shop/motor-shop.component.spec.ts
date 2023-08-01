import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorShopComponent } from './motor-shop.component';

describe('MotorShopComponent', () => {
  let component: MotorShopComponent;
  let fixture: ComponentFixture<MotorShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorShopComponent]
    });
    fixture = TestBed.createComponent(MotorShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
