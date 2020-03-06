import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import {RegisterService} from '../register.service';
import {ValidateHasUpperCase, ValidateHasLowerCase, ValidatePasswordMatch} from '../custom-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.component.html',
  styleUrls: ['./register-detail.component.css']
})
export class RegisterDetailComponent implements OnInit {

  isRetailer : boolean = false;
  registrationForm;

  recordId : string;
  isFinish : boolean = false;

  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private formBuilder: FormBuilder,
  private registerService: RegisterService,
  private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
        companyName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), ValidateHasUpperCase, ValidateHasLowerCase]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
        countryCode: ['', ''],
        phone: ['', [Validators.required]],
        couponCode: ['', '']
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

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

   onSubmit(customerData) {

       console.log('Registration form submitted', customerData);
       this.registerService.register(customerData).subscribe(id => this.recordId = id);
       console.log(`Record with id ${this.recordId} created`);
       this.isFinish = true;
   }

   resendEmail(){
      this.registerService.resendConfirmEmail(this.recordId).subscribe(msg => console.log('email resent'));
   }
}
