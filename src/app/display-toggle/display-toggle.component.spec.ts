import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayToggleComponent } from './display-toggle.component';

describe('DisplayToggleComponent', () => {
  let component: DisplayToggleComponent;
  let fixture: ComponentFixture<DisplayToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
