import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SsoComponent } from './sso/sso.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDetailComponent } from './register-detail/register-detail.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';

import { TestComponent } from './test/test.component';
const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'register-detail/:businessType',  component: RegisterDetailComponent },
  { path: 'sso',  component: SsoComponent },
  { path: 'product-list',  component: ProductListComponent },
  { path: 'product', component: ProductEditorComponent },
  { path: 'product/:productId', component: ProductEditorComponent },
  { path: 'test',  component: TestComponent },

  { path: '',  component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
