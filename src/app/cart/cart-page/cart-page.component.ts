import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { GlobalApp } from 'src/app/common/global';
import { Product } from 'src/app/marketplace/types/product.interface';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent  implements OnInit {
  trashIcon=faTrash;
  cartItems:any[] = [];
  constructor(private app:GlobalApp){

  }
  ngOnInit(): void {
    this.cartItems=this.app.getCartItems();
    this.cartItems=this.cartItems.map(product => ({
      ...product,
      amount: 1,
    }));
    console.log(this.app.getCartItems());
  }
  

  removeFromCart(item: Product): void {
    console.log("deleted");
    
    const index = this.app.getCartItems().findIndex((p:any)=>p.uuid===item.uuid);
    console.log(index);
    
    if (index !== -1) {
      const newCartItems=this.app.getCartItems().filter((p:any)=>p.uuid!==item.uuid);
      this.app.setCartItems(newCartItems);
      console.log(newCartItems);
      
      this.cartItems.splice(index, 1);
    }
  }
}
