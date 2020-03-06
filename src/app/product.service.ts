import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts() : Observable<Product[]> {

    return of(PRODUCTS);
  }
}
