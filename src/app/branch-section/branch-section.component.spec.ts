import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSectionComponent } from './branch-section.component';

describe('BranchSectionComponent', () => {
  let component: BranchSectionComponent;
  let fixture: ComponentFixture<BranchSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchSectionComponent]
    });
    fixture = TestBed.createComponent(BranchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
