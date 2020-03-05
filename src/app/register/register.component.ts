import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isRetailer : boolean = false;
  isSupplier : boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/login']);
  }

  next(){
    var businessType = null;
    if(this.isRetailer || this.isSupplier){
      if(this.isRetailer){
        businessType = 'retailer';
      }
      else{
        businessType = 'supplier'
      }
      this.router.navigate([`/register-detail/${businessType}`]);
    }

  }

  selectRetailer() : void{
    this.isRetailer = true;
    this.isSupplier = false;
  }

  selectSupplier() : void{
    this.isRetailer = false;
    this.isSupplier = true;
  }
}
