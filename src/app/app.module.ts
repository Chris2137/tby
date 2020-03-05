import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SsoComponent } from './sso/sso.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';

import { TestComponent } from './test/test.component';
import { RegisterDetailComponent } from './register-detail/register-detail.component';
import { ContainsCharacterInDirective } from './contains-character-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SsoComponent,
    ProductListComponent,
    RegisterComponent,
    TestComponent,
    RegisterDetailComponent,
    ContainsCharacterInDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    ButtonModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    PasswordModule,
    FieldsetModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
