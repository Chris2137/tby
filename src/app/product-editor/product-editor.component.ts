import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  product : Product ;
  isNew : boolean = true;
  editorForm;

  currencyOptions : SelectItem[];
  qtyUnitOptions :  SelectItem[];
  timeUnitOptions :  SelectItem[];
  countriesOptions : SelectItem[];

  constructor(
    private productService : ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
   ) {
   this.editorForm = this.formBuilder.group({
     name: ['', Validators.required],
     minPrice: ['',''],
     maxPrice: ['',''],
     currency: ['',''],
     minQty: ['', ''],
     minQtyUnit: ['', ''],
     leadTime: ['', ''],
     leadTimeUnit: ['', ''],
     countryOfOrigin: ['',''],
     colors : this.formBuilder.array([]),
     size: ['', ''],
     material: ['', ''],
     sellingPoints : ['', ''],
     description : ['', ''],
     photos : ['', '']
      });
     }

  ngOnInit(): void {

    var productId = this.route.snapshot.paramMap.get('productId');

    if(productId != null){
      this.productService.getProduct(productId).subscribe( product => this.product = product);
      this.isNew = false;
    }
    else{
      this.isNew = true;
    }

    this.initDropdownOptions();

  }

  private initDropdownOptions() : void{
     this.currencyOptions = [
                         {label: 'USD', value: 'USD'},
                         {label: 'EUR', value: 'EUR'},
                         {label: 'CNY', value: 'CNY'},
                         {label: 'HKD', value: 'HKD'}];

     this.qtyUnitOptions = [
                              {label: 'piece', value: 'piece'},
                              {label: 'pair', value: 'pair'},
                              {label: 'set', value: 'set'}];

     this.timeUnitOptions = [
                               {label: 'days', value: 'days'},
                               {label: 'weeks', value: 'weeks'},
                               {label: 'months', value: 'months'}];

      this.productService.getCountryList().subscribe(countries =>{
          this.countriesOptions = [];
          for(var country of countries){
            console.log(country);
            this.countriesOptions.push({label: country, value : country});
          }
        }
      );
  }

  get colors() {
    return this.editorForm.get('colors') as FormArray;
  }

   addColor(){
       this.colors.push(this.formBuilder.group({
                                rgb: '',
                                colorName: '',
                              }));
   }

   removeColor(i:number) {
     this.colors.removeAt(i);
   }

}
