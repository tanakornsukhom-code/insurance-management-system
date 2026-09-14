import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddclaimPage } from './addclaim.page';

describe('AddclaimPage', () => {
  let component: AddclaimPage;
  let fixture: ComponentFixture<AddclaimPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
