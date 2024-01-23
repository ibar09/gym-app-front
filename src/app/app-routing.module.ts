import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductCardComponent } from './marketplace/product-card/product-card.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { UseraccountComponent } from './user/useraccount/useraccount.component';
import { MarketplaceComponent } from './marketplace/marketplace/marketplace.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path:"marketplace", component:MarketplaceComponent},
  { path:"login", component:LoginComponent},
  { path:"register", component:RegisterComponent},
  {path:"my-account", component:UseraccountComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
