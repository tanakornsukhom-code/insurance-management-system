import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddpolicyAgentPage } from './addpolicy-agent.page';

describe('AddpolicyAgentPage', () => {
  let component: AddpolicyAgentPage;
  let fixture: ComponentFixture<AddpolicyAgentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpolicyAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
