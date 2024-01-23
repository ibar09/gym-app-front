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
    UseraccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarketplaceModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [AuthentificationInterceptorProvider,GlobalApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
