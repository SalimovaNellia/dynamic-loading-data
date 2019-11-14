import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  loading: boolean;
  displayVal: string = 'card';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onDisplayChange(displayValue) {
    this.displayVal = displayValue;
  }

  getProducts() {
    this.loading = true;
    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
      this.loading = false;
    });
  }

  getNextProducts() {
    if (this.dataService.next !== undefined && this.dataService.next !== '') {
      this.dataService.sendGetRequestToUrl(this.dataService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log('nextProducts: ', res.body);
        this.products.push(...res.body);
        console.log('neProductsArray: ', this.products);
      })
    }
  }

  onDeleteProduct(id: number) {
      this.products = this.products.filter(v => v.id != id);
  }
}
