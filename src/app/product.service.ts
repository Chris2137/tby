import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { COUNTRIES} from './countries';
import { CATEGORIES} from './categories';
import { UploadedFile} from './uploaded-file';
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

    /* to be removed, just use return of(PRODUCTS.find(product => product.id === id)); */
    var result = PRODUCTS.find(product => product.id === id);
    result.name = result.name + ' updated';
    console.log(result);
    return of(result);
  }

  saveProduct(product) : Observable<string>{
    console.log('Save product with detail');
    return of(product.id);
  }

  uploadFile(files) : Observable<UploadedFile[]>{

    return of([<UploadedFile> {
          id : 'photo2', name : 'Sushi plate.png', size : 770293, thumbnail : 'https://tbytest.blob.core.windows.net/csqa/5e610f7abdd872df5b9d3f13?sp=r&st=2020-03-04T14:40:58Z&se=2020-06-05T14:40:58Z&spr=https&sv=2018-11-09&sig=9IjV8qRXQeSFnp%2FBgzhcFe9hbcNbWrLegIk64zG7ZEw%3D&srt=o&ss=b'
      }]);
  }
}
