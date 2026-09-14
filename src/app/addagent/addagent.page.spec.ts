import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddagentPage } from './addagent.page';

describe('AddagentPage', () => {
  let component: AddagentPage;
  let fixture: ComponentFixture<AddagentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddagentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
