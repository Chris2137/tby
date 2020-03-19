import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {SelectItem, MessageService} from 'primeng/api';

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
  isSubmitted : boolean = false;

  @Output() saveCompleted = new EventEmitter();

  currencyOptions : SelectItem[];
  qtyUnitOptions :  SelectItem[];
  timeUnitOptions :  SelectItem[];
  countriesOptions : SelectItem[];
  categoriesOptions : SelectItem[];


  @ViewChild("mytest") mytest: ElementRef;

  constructor(
    private messageService: MessageService,
    private productService : ProductService,
    private formBuilder: FormBuilder,
    private el: ElementRef
   ) {
   this.el = el;
  this.editorForm = this.formBuilder.group({
    id: ['',''],
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
    category : ['', Validators.required],
    photo : ['', ''],
    supportingDoc : ['', ''],
    innerCarton : this.createCartonInfoGroup(),
    masterCarton : this.createCartonInfoGroup(),
    });
   }

  test(){
    console.log('test called');
  }
  ngOnInit(): void {

    this.initDropdownOptions();
  }

  ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');
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

  onSave(){
    this.isSubmitted = true;
    console.log(this.isSubmitted && this.category.invalid && this.category.errors.required);
    console.log(this.isSubmitted);
    console.log(this.category.invalid);
    console.log(this.category.errors);

    if(this.editorForm.invalid){
      this.focusToFirstInvalidInput(this.editorForm);
    }
    else{
      this.productService.saveProduct(this.editorForm.value).subscribe(id=> {
        this.isLoading = false;
        this.saveCompleted.emit({id:id, isNew:this.isNew} );
      });
    }
  }

  focusToFirstInvalidInput(form){
    for (const key of Object.keys(form.controls)) {
          if (form.controls[key].invalid) {
          console.log(`${key} is invalid`);
          console.log(form.controls[key].errors);
            const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
            console.log(invalidControl.tagName);
            if(invalidControl.tagName.toUpperCase().startsWith('P-')){
              const ctrlAnchor = this.el.nativeElement.querySelector('[id="' + key + '_anchor"]');
              console.log(ctrlAnchor);
              if(ctrlAnchor){
                ctrlAnchor.focus();
              }
            }
            else{
              invalidControl.focus();
            }
            break;
         }
    }
  }

  get name(){
    return this.editorForm.get('name');
  }

  get category(){
    return this.editorForm.get('category');
  }
  get photo(){
    return this.editorForm.get('photo').value;
  }
  get supportingDoc(){
    return this.editorForm.get('supportingDoc').value;
  }

  loadProductById(productId){

    if(productId != null){
        this.productService.getProduct(productId).subscribe( product =>
        {
          this.populateFormByProduct(product);
        });
        this.isNew = false;
      }
      else{
        this.isNew = true;
      }
  }

   public populateFormByProduct(product){

    if(product != null){

      this.isNew = false;
      this.product = product;
      this.editorForm.patchValue(
       {
         id: this.product.id,
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
    }
    else{
      this.isNew = true;
      this.editorForm.reset();
      /* to be removed, just for illustration purpose.*/
      this.editorForm.patchValue(
       {
         id: 'new product id',
       }
     );
    }
   }
}
