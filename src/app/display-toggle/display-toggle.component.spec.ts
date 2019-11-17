import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayToggleComponent } from './display-toggle.component';
import {MatButtonToggle, MatButtonToggleGroup, MatIcon, MatRipple, MatRippleModule} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';

describe('DisplayToggleComponent', () => {
  let component: DisplayToggleComponent;
  let fixture: ComponentFixture<DisplayToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayToggleComponent, MatButtonToggleGroup, MatIcon, MatButtonToggle ],
      providers: [ CookieService ],
      imports: [ MatRippleModule ]
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
