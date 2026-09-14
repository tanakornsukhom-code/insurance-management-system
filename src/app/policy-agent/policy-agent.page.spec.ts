import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolicyAgentPage } from './policy-agent.page';

describe('PolicyAgentPage', () => {
  let component: PolicyAgentPage;
  let fixture: ComponentFixture<PolicyAgentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
