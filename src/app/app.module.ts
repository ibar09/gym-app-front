import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routing} from './app.routing';
import { AppComponent } from './app.component';
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
    imports: [
        Routing,
        BrowserModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        BrowserAnimationsModule,
        NgApexchartsModule,
        CanvasJSAngularChartsModule,
        FormsModule,
      MatFormFieldModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
