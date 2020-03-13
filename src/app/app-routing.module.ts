import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SsoComponent } from './sso/sso.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDetailComponent } from './register-detail/register-detail.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { MarketComponent} from './market/market.component';
import { NetworkComponent} from './network/network.component';
import { RequestListComponent} from './request-list/request-list.component';
import { MyCreationComponent} from './my-creation/my-creation.component';

import { TestComponent } from './test/test.component';
const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'register-detail/:businessType',  component: RegisterDetailComponent },
  { path: 'sso',  component: SsoComponent },
  { path: 'workspace/product-list',  component: ProductListComponent },
  { path: 'workspace/product', component: ProductEditorComponent },
  { path: 'workspace/product/:productId', component: ProductEditorComponent },
  { path: 'workspace/requests', component: RequestListComponent },
  { path: 'workspace/mycreation', component: MyCreationComponent },
  { path: 'test',  component: TestComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'workspace', component: ProductListComponent },
  { path: 'market', component: MarketComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'network/connections', component: NetworkComponent },
  { path: 'network/directory', component: NetworkComponent },
  { path: 'network/invitations', component: NetworkComponent },
  { path: '',  component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
