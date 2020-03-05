import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import {RegisterService} from '../register.service';
import {ValidateHasUpperCase, ValidateHasLowerCase, ValidatePasswordMatch} from '../custom-validators';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.component.html',
  styleUrls: ['./register-detail.component.css']
})
export class RegisterDetailComponent implements OnInit {

  isRetailer : boolean = false;
  registrationForm;
  submitMsg ; string;

  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private formBuilder: FormBuilder,
  private registerService: RegisterService
  ) {
    this.registrationForm = this.formBuilder.group({
        companyName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), ValidateHasUpperCase, ValidateHasLowerCase]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
        countryCode: ['', ''],
        areaCode: ['', ''],
        phone: ['', [Validators.required]],
        }, { validators: ValidatePasswordMatch });
  }

  ngOnInit(): void {
    var businessType = this.route.snapshot.paramMap.get('businessType');

    if(businessType === 'retailer'){
      this.isRetailer = true;
    }
  }

  get f() { return this.registrationForm.controls;}

  back(): void {
    this.location.back();
  }

   onSubmit(customerData) {

      console.warn(this.registrationForm.errors);
      console.warn(this.registrationForm.errors.passwordMismatch);
       console.warn('Registration form submitted', customerData);
       this.registerService.register(customerData).subscribe(msg => this.submitMsg = msg);
   }
}
