import { Component, OnInit, Input } from '@angular/core';
import {UploadedFile} from '../uploaded-file';

@Component({
  selector: 'app-product-uploaded-file',
  templateUrl: './product-uploaded-file.component.html',
  styleUrls: ['./product-uploaded-file.component.css']
})
export class ProductUploadedFileComponent implements OnInit {

  @Input() files : UploadedFile[];


  constructor() { }

  ngOnInit(): void {
  }

  removeItem(id:string){

      console.log(`remove item with id${id}`);

      this.files.forEach( (file, index) => {
         if(file.id === id) this.files.splice(index,1);
       });
  }
}
