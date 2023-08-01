import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionGroupComponent } from './division-group.component';

describe('DivisionGroupComponent', () => {
  let component: DivisionGroupComponent;
  let fixture: ComponentFixture<DivisionGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisionGroupComponent]
    });
    fixture = TestBed.createComponent(DivisionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
