import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjusterComponent } from './adjuster.component';

describe('AdjusterComponent', () => {
  let component: AdjusterComponent;
  let fixture: ComponentFixture<AdjusterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdjusterComponent]
    });
    fixture = TestBed.createComponent(AdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
