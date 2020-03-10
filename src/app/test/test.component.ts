import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    editorForm;
    values : string[];

    constructor(
        private formBuilder: FormBuilder,
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
         values : ['', ''],
         colors : this.formBuilder.array([])
         });
       }

      ngOnInit(
      ): void {

      }

  get colors() {
    return this.editorForm.get('colors') as FormArray;
  }

   onSubmit(customerData) {

       console.log('Editor form submitted', customerData);
   }

   addColor(){
       this.colors.push(this.formBuilder.group({
                                rgb: '',
                                colorName: '',
                              }));
   }
}
