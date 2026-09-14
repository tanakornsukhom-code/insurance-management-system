import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddpolicyPage } from './addpolicy.page';

describe('AddpolicyPage', () => {
  let component: AddpolicyPage;
  let fixture: ComponentFixture<AddpolicyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
