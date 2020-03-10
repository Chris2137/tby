import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
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
  isLoading : boolean = false;

  currencyOptions : SelectItem[];
  qtyUnitOptions :  SelectItem[];
  timeUnitOptions :  SelectItem[];
  countriesOptions : SelectItem[];
  categoriesOptions : SelectItem[];

  constructor(
    private productService : ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
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
     colors : ['',''],
     size: ['', ''],
     material: ['', ''],
     sellingPoints : ['', ''],
     description : ['', ''],
     photos : ['', ''],
     categories : ['', ''],
     innerCarton : this.createCartonInfoGroup(),
     masterCarton : this.createCartonInfoGroup(),
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

  createCartonInfoGroup(): FormGroup {
    return this.formBuilder.group({
        dimensionUnit : ['in', ''],
          length : ['', ''],
          width :['', ''],
          height : ['', ''],
          volume : ['', ''],
          weight : ['', ''],
          weightUnit : ['', ''],
          quantity : ['', ''],
          quantityUnit : ['', '']
    });
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
                    this.countriesOptions.push({label: country, value : country});
                  }
                });

     this.productService.getCategoryList().subscribe(categories =>{
               this.categoriesOptions = [];
               for(var category of categories){
                 this.categoriesOptions.push({label: category, value : category});
               }
             });
  }

  uploader(event) {
      console.log(event.files);
  }

  onSubmit(formData){
      this.isLoading = true;
      this.productService.createProduct(formData).subscribe(id=> {this.isLoading = false; this.router.navigate([`/product/${id}`])});

  }
}
