import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentCorporateComponent } from './sub-agent-corporate.component';

describe('SubAgentCorporateComponent', () => {
  let component: SubAgentCorporateComponent;
  let fixture: ComponentFixture<SubAgentCorporateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubAgentCorporateComponent]
    });
    fixture = TestBed.createComponent(SubAgentCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
