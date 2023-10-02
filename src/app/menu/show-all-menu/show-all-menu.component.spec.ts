import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllMenuComponent } from './show-all-menu.component';

describe('ShowAllMenuComponent', () => {
  let component: ShowAllMenuComponent;
  let fixture: ComponentFixture<ShowAllMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllMenuComponent]
    });
    fixture = TestBed.createComponent(ShowAllMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
