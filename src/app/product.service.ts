import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { COUNTRIES} from './countries';
import { CATEGORIES} from './categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getCountryList() : Observable<string[]> {

    return of(COUNTRIES);
  }
  getProducts() : Observable<Product[]> {

    return of(PRODUCTS);
  }

  getCategoryList() : Observable<string[]> {

    return of(CATEGORIES);
  }

  getProduct(id : string) : Observable<Product>{
    console.log(`load product with id ${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }

  createProduct(product) : Observable<string>{
    console.log('create product with detail');
    console.log(product);
    return of('newProductId');
  }
}
