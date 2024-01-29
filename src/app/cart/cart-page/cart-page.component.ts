import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { GlobalApp } from 'src/app/common/global';
import { Product } from 'src/app/marketplace/types/product.interface';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  trashIcon=faTrash;
  cartItems:any[] = [];
  constructor(private app:GlobalApp){
    this.cartItems=app.getCartItems();
    this.cartItems=this.cartItems.map(product => ({
      ...product,
      amount: 1, // You can set the quantity to any default value you prefer
    }));
    console.log(this.cartItems[1].amount);
    
  }
  removeFromCart(item: { image: string; quantity: number; price: number; }): void {
    const index = this.app.getCartItems().indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
