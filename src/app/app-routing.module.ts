import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductCardComponent } from './marketplace/product-card/product-card.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { UseraccountComponent } from './user/useraccount/useraccount.component';
import { MarketplaceComponent } from './marketplace/marketplace/marketplace.component';
import { AuthGuard } from './guards/auth.guard';
import { TrainingComponent } from './trainers/training/training.component';
import { FactureComponent } from './cart/facture/facture.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { CoachDashboardComponent } from './coach-dashboard/coach-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CoachDetailsComponent } from './coach-details/coach-details.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path:"marketplace", component:MarketplaceComponent},
  { path:"login", component:LoginComponent},
  { path:"register", component:RegisterComponent},
  {path:"my-account", component:UseraccountComponent,canActivate:[AuthGuard]},
  {path:"trainers",component:TrainingComponent},
  {path:"cart", component:CartPageComponent},
  {path:"my-account2", component:CoachDashboardComponent},
  {path:"productdetails/:id", component:ProductDetailsComponent},
  {path:"coachdetails/:id", component:CoachDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
