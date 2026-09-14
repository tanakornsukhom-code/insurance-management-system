import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcustomerPage } from './addcustomer.page';

describe('AddcustomerPage', () => {
  let component: AddcustomerPage;
  let fixture: ComponentFixture<AddcustomerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
