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
         files : ['','']
         });
       }

     items: MenuItem[];
      ngOnInit() {
        this.items = [
            {
                label: 'Showroom',
                styleClass: 'active_item',
                routerLink: ['/test']
            },
            {
                label: 'Projects',
            },
            {
                label: 'Requests',
            },
            {
                label: 'My Creations'
            },
        ];
    }

    uploadedFiles: any[] = [];

    myUploader(event) {
        //event.files == files to upload
        console.log(event.files);
    }


}
