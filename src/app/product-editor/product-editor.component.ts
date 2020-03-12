import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {SelectItem} from 'primeng/api';
import {InputText} from 'primeng/inputtext';
import {Dropdown} from 'primeng/dropdown';

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

  @ViewChild('ddCurrency')
    ddCurrency :  Dropdown;


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
    description : ['', ''],
    color : ['',''],
    size: ['', ''],
    material: ['', ''],
    sellingPoint : ['', ''],
    category : ['', ''],
    photo : ['', ''],
    supportingDoc : ['', ''],
    innerCarton : this.createCartonInfoGroup(),
    masterCarton : this.createCartonInfoGroup(),
    });
   }

  ngOnInit(): void {

    var productId = this.route.snapshot.paramMap.get('productId');

    if(productId != null){
      this.productService.getProduct(productId).subscribe( product =>
      {
        this.product = product;

        this.editorForm.patchValue(
         {
           name: this.product.name,
           minPrice: this.product.minPrice,
           maxPrice: this.product.maxPrice,
           currency: this.product.currency,
           minQty: this.product.minQty,
           minQtyUnit: this.product.minQtyUnit,
           leadTime: this.product.leadTime,
           leadTimeUnit: this.product.leadTimeUnit,
           countryOfOrigin: this.product.countryOfOrigin,
           description : this.product.description,
           color : this.product.color,
           size: this.product.size,
           material: this.product.material,
           sellingPoint : this.product.sellingPoint,
           category : this.product.category,
           innerCarton : this.product.innerCarton,
           masterCarton : this.product.masterCarton,
           photo : this.product.photo,
           supportingDoc : this.product.supportingDoc

         }
        );
      });
      this.isNew = false;
    }
    else{
      this.isNew = true;
    }

    this.initDropdownOptions();

  }

  ngAfterViewInit(): void {
  console.log(this.ddCurrency);
    console.log(this.ddCurrency.updateFilledState  );
    this.ddCurrency.updateFilledState();
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

  uploader(uploadFor, event) {
      console.log(event.files);
      /* assume a new UploadedFile will be returned upon finish uploading via service*/
      this.productService.uploadFile(event.files).subscribe( files=> this.editorForm.get(uploadFor).value = this.editorForm.get(uploadFor).value.concat(files));
      console.log(this.editorForm.get(uploadFor).value);
  }

  onSubmit(formData){
      this.isLoading = true;
      this.productService.createProduct(formData).subscribe(id=> {this.isLoading = false; this.router.navigate([`/product/${id}`])});

  }

  get photo(){
    return this.editorForm.get('photo').value;
  }

  get supportingDoc(){
      return this.editorForm.get('supportingDoc').value;
    }
}
