import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LayoutMode } from '../products/products.component';

@Component({
  selector: 'app-display-toggle',
  templateUrl: './display-toggle.component.html',
  styleUrls: ['./display-toggle.component.css']
})
export class DisplayToggleComponent implements OnInit {
  @Input() layout: LayoutMode;
  @Output() layoutChanged = new EventEmitter<LayoutMode>();

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if(this.cookieService.get('cookieDisplayValue')) {
      this.layout = this.cookieService.get('cookieDisplayValue') as LayoutMode;
    } else {
      this.layout = 'card';
    }
    this.layoutChanged.next(this.layout);
  }

  onDisplayChange(displayValue: LayoutMode) {
    this.layout = displayValue;
    this.cookieService.set('cookieDisplayValue', displayValue);
    this.layoutChanged.next(displayValue);
  }

}
