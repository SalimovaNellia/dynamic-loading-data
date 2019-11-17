import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import {DataService} from '../services/data.service';
import { DisplayToggleComponent } from '../display-toggle/display-toggle.component';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle, MatIcon, MatRippleModule,
  MatSpinner
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {by} from 'protractor';
import {By} from '@angular/platform-browser';
import {instance, mock, when} from 'ts-mockito';
import {CookieService} from 'ngx-cookie-service';
import {of} from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  const cookieServiceMock = mock(CookieService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        MatSpinner,
        MatCardTitle,
        MatCardSubtitle,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCard,
        MatButtonToggleGroup,
        MatIcon,
        MatButtonToggle,
        DisplayToggleComponent
      ],
      providers: [
        DataService,
        {provide: CookieService, useFactory: () => instance(cookieServiceMock)},
      ],
      imports: [ MatRippleModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show cards layout by default', () => {
    const productsWrapElement = fixture.debugElement.query(By.css('.products-wrap'));
    expect(productsWrapElement.classes['productsCards']).toBeTruthy();
    expect(productsWrapElement.classes['productsList']).toBeFalsy();
  });
});
