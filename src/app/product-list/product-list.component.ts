import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';

import { ProductService } from '../product.service';
import { Product } from '../product';
import { ProductEditorComponent } from '../product-editor/product-editor.component';

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
  selectedProduct : Product;
  display : boolean;

  @ViewChild("editor") editor: ProductEditorComponent;


  constructor(
    private messageService: MessageService,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
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

  loadProducts(): void {
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

    selectProduct(selectedProduct){
      this.display = true;
      this.selectedProduct = selectedProduct;
      this.editor.populateFormByProduct(selectedProduct);
    }

    dialogClosed(){
      this.selectedProduct = null;
    }

    onSave(){
      this.editor.onSave();
    }

    saveCompleted(event){
      console.log(event);
      this.display = false;
      this.selectedProduct = null;
      this.messageService.add({severity:'success', summary:'Product Saved'});
      if(event.isNew){
        console.log('reload page result');
        this.loadProducts();
      }
      else{
        console.log('update product');
        var updatedIndex = this.products.findIndex((prod) => prod.id === event.id);
        console.log(`${updatedIndex} updatedIndex`);
        if(updatedIndex > -1){
          this.productService.getProduct(event.id).subscribe( updatedProduct => this.products[updatedIndex] = updatedProduct);
        }
      }
    }
}
