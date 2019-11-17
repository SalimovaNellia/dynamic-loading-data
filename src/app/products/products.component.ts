import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  loading: boolean;
  layout: LayoutMode;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  getProducts() {
    this.loading = true;
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Product[]>) => {
      console.log(res);
      this.products = res.body;
      this.loading = false;
    });
  }

  getNextProducts() {
    if (this.dataService.next !== undefined && this.dataService.next !== '') {
      this.dataService.sendGetRequestToUrl(this.dataService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Product[]>) => {
        this.products.push(...res.body);
      })
    }
  }

  onDeleteProduct(id: number) {
      this.products = this.products.filter(v => v.id != id);
  }

  changeLayout(event: LayoutMode) {
    this.layout = event;
    console.log('event', event)
  }
}

export type LayoutMode = 'card' | 'list';


