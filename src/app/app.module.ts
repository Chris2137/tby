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
import { HttpClientModule } from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {DataViewModule} from 'primeng/dataview';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ChipsModule} from 'primeng/chips';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';

import { TestComponent } from './test/test.component';
import { RegisterDetailComponent } from './register-detail/register-detail.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductItemInfoComponent } from './product-item-info/product-item-info.component';
import { ProductItemActionBarComponent } from './product-item-action-bar/product-item-action-bar.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { RequiredInputComponent } from './required-input/required-input.component';
import { ProductCartonInfoComponent } from './product-carton-info/product-carton-info.component';
import { ProductUploadedFileComponent } from './product-uploaded-file/product-uploaded-file.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketComponent } from './market/market.component';
import { NetworkComponent } from './network/network.component';
import { TbyMenuBarComponent } from './tby-menu-bar/tby-menu-bar.component';
import { RequestListComponent } from './request-list/request-list.component';
import { MyCreationComponent } from './my-creation/my-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SsoComponent,
    ProductListComponent,
    RegisterComponent,
    TestComponent,
    RegisterDetailComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductItemInfoComponent,
    ProductItemActionBarComponent,
    ProductEditorComponent,
    RequiredInputComponent,
    ProductCartonInfoComponent,
    ProductUploadedFileComponent,
    DashboardComponent,
    MarketComponent,
    NetworkComponent,
    TbyMenuBarComponent,
    RequestListComponent,
    MyCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ButtonModule,
    CardModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    MultiSelectModule,
    PasswordModule,
    PanelModule,
    FieldsetModule,
    TabMenuModule,

    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
