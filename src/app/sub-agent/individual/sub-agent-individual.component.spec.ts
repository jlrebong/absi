import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentIndividualComponent } from './sub-agent-individual.component';

describe('SubAgentIndividualComponent', () => {
  let component: SubAgentIndividualComponent;
  let fixture: ComponentFixture<SubAgentIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubAgentIndividualComponent]
    });
    fixture = TestBed.createComponent(SubAgentIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
