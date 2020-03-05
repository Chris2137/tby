import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  countryCode : string;
  areaCode : string;
  phone : string;
  value : string;
  registrationForm;

  constructor(
  private formBuilder: FormBuilder
  ) {

   this.registrationForm = this.formBuilder.group({
             companyName: ['', Validators.required],
                     firstName: ['', Validators.required],
                     lastName: ['', Validators.required],
                     email: ['', Validators.required, Validators.email],
                     password: ['', [Validators.required, Validators.minLength(8)]],
                     passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
           });

           }

  ngOnInit(): void {
  }

   onSubmit(customerData) {
       // Process checkout data here

       console.warn('Your order has been submitted', customerData);
     }
}
