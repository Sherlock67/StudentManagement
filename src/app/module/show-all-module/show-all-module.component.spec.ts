import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllModuleComponent } from './show-all-module.component';

describe('ShowAllModuleComponent', () => {
  let component: ShowAllModuleComponent;
  let fixture: ComponentFixture<ShowAllModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllModuleComponent]
    });
    fixture = TestBed.createComponent(ShowAllModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
