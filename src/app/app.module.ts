import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routing} from './app.routing';
import { AppComponent } from './app.component';
<<<<<<< HEAD
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

=======
import { AdminPanelComponent } from '../adminPanel/admin-panel/admin-panel.component';
import { AdminPanelDashboardComponent } from '../adminPanel/admin-panel-dashboard/admin-panel-dashboard.component';
import { AdminPanelSideNavComponent } from '../adminPanel/admin-panel-side-nav/admin-panel-side-nav.component';
import { AdminPanelHeaderComponent } from '../adminPanel/admin-panel-header/admin-panel-header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlPanelComponent } from '../adminPanel/control-panel/control-panel.component';
import { CustomersComponent } from '../adminPanel/customers/customers.component';
import { PychartComponent } from '../adminPanel/pychart/pychart.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {FormsModule} from "@angular/forms";
import { ProductMangementComponent } from '../adminPanel/product-mangement/product-mangement.component';
import { OrdersMangementComponent } from '../adminPanel/orders-mangement/orders-mangement.component';
import { OrderschartComponent } from '../adminPanel/orderschart/orderschart.component';
import { DashboardschartComponent } from '../adminPanel/dashboardschart/dashboardschart.component';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    TrainerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarketplaceModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    AdminPanelComponent,
    AdminPanelDashboardComponent,
    AdminPanelSideNavComponent,
    AdminPanelHeaderComponent,
    ControlPanelComponent,
    CustomersComponent,
    PychartComponent,
    ProductMangementComponent,
    OrdersMangementComponent,
    OrderschartComponent,
    DashboardschartComponent,
  ],
  providers: [AuthentificationInterceptorProvider,GlobalApp],   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
