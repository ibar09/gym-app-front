import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    MarketplaceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MarketplaceComponent]
})
export class MarketplaceModule { }
