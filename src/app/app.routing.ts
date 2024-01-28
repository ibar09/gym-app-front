import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPanelComponent} from "../adminPanel/admin-panel/admin-panel.component";
import {AdminPanelDashboardComponent} from "../adminPanel/admin-panel-dashboard/admin-panel-dashboard.component";
import {AdminPanelSideNavComponent} from "../adminPanel/admin-panel-side-nav/admin-panel-side-nav.component";
import {CustomersComponent} from "../adminPanel/customers/customers.component";
import {PychartComponent} from "../adminPanel/pychart/pychart.component";
import {ProductMangementComponent} from "../adminPanel/product-mangement/product-mangement.component";
import {OrdersMangementComponent} from "../adminPanel/orders-mangement/orders-mangement.component";
import {OrderschartComponent} from "../adminPanel/orderschart/orderschart.component";

const APP_ROUTING: Routes = [
  { path: 'adminPanel/customers', component: PychartComponent , pathMatch: 'full'},
  { path: 'adminPanel/orders', component: OrderschartComponent , pathMatch: 'full'},
  { path: 'adminPanel/products', component: ProductMangementComponent , pathMatch: 'full'},
  { path: 'adminPanel/UserManagement', component: CustomersComponent , pathMatch: 'full'},
  { path: 'adminPanel/CoachManagement', component: CustomersComponent , pathMatch: 'full'},
  { path: 'adminPanel/Dashboard', component: AdminPanelDashboardComponent , pathMatch: 'full'},
  {path: 'adminPanel/ordersManagement', component: OrdersMangementComponent , pathMatch: 'full'},




  // {path:'adminPanel',component:AdminPanelComponent, pathMatch: 'full'},
];

export const Routing =  RouterModule.forRoot(APP_ROUTING) ;
