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

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        DisplayToggleComponent,
        MatSpinner,
        MatCardTitle,
        MatCardSubtitle,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCard,
        MatButtonToggleGroup,
        MatIcon,
        MatButtonToggle
      ],
      providers: [ DataService ],
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

  it('should change layout mode on button click', () => {
    const productsWrapElement = fixture.debugElement.query(By.css('.products-wrap'));
    expect(productsWrapElement.classes['productsCards']).toBeTruthy()
  });
});
// when(biddingServiceMock.deleteBid(anything(), anything())).thenReturn(of(noop()));
// const biddingServiceMock = mock(BiddingService);
// {provide: BiddingService, useFactory: () => instance(biddingServiceMock)},
