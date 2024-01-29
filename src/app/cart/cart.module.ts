import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture/facture.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    FactureComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class CartModule { }
