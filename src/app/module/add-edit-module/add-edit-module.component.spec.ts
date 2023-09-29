import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditModuleComponent } from './add-edit-module.component';

describe('AddEditModuleComponent', () => {
  let component: AddEditModuleComponent;
  let fixture: ComponentFixture<AddEditModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditModuleComponent]
    });
    fixture = TestBed.createComponent(AddEditModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
