import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.sortOptions = [
                {label: 'Date Updated', value: '!updatedDate'},
                {label: 'Date Created', value: '!createdDate'},
                {label: 'Price: Low to High', value: 'priceFrom'},
                {label: 'Price: High to Low', value: '!priceFrom'},
                {label: 'Product Name: A - Z', value: 'itemName'},
                {label: 'Most Liked', value: '!likeCount'},
                {label: 'Most Commented', value: '!commentCount'}
            ];
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}
