import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {CartonInfo} from '../carton-info';
import { ProductService } from '../product.service';
import {SelectItem} from 'primeng/api';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-product-carton-info',
  templateUrl: './product-carton-info.component.html',
  styleUrls: ['./product-carton-info.component.css']
})
export class ProductCartonInfoComponent implements OnInit {

  @Input() labelText : string;

  dimensionUnitOptions : SelectItem[];
  weightUnitOptions : SelectItem[];
  qtyUnitOptions : SelectItem[];

  constructor(
    public controlContainer: ControlContainer,
    private productService : ProductService
  ) {
  }

  ngOnInit(): void {
    this.initDropdownOptions();
  }

  private initDropdownOptions() : void{
     this.dimensionUnitOptions = [
                         {label: 'cm', value: 'cm'},
                         {label: 'm', value: 'm'},
                         {label: 'in', value: 'in'},
                         {label: 'ft', value: 'ft'}];

     this.weightUnitOptions = [
                              {label: 'kg', value: 'kg'},
                              {label: 'gr', value: 'gr'},
                              {label: 'lb', value: 'lb'}];

     this.qtyUnitOptions= [
                               {label: 'piece', value: 'piece'},
                               {label: 'pair', value: 'pair'},
                               {label: 'set', value: 'set'}];

  }

  updateVolume(event){
      var height =  this.controlContainer.control.get('height').value;
      var width =  this.controlContainer.control.get('width').value;
      var length =  this.controlContainer.control.get('length').value;
      if(this.hasValue(height) && this.hasValue(width) && this.hasValue(length)){
        this.controlContainer.control.get('volume').setValue(height * width * length);
      }
  }

  private hasValue(val) : boolean {
    return val != null && val > 0;
  }
}
