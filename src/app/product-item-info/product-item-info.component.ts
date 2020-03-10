import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../product';
@Component({
  selector: 'app-product-item-info',
  templateUrl: './product-item-info.component.html',
  styleUrls: ['./product-item-info.component.css']
})
export class ProductItemInfoComponent implements OnInit {

  @Input() product : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
