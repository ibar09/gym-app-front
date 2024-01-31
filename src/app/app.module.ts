import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductCardComponent } from './marketplace/product-card/product-card.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { UseraccountComponent } from './user/useraccount/useraccount.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor, AuthentificationInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { GlobalApp } from './common/global';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrainerCardComponent } from './trainers/trainer-card/trainer-card.component';
import { TrainingComponent } from './trainers/training/training.component';
import { TrainerListComponent } from './trainers/trainer-list/trainer-list.component';
import { CartModule } from './cart/cart.module';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoachDashboardComponent } from './coach-dashboard/coach-dashboard.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ChooseUsComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    UseraccountComponent,
    TrainerCardComponent,
    TrainingComponent,
    TrainerListComponent,
    CoachDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarketplaceModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    CartModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [AuthentificationInterceptorProvider,GlobalApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
