import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product.interface';
import { GlobalApp } from 'src/app/common/global';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input() product!:Product;
  cartItems!:Product[];
  productInCart:boolean=false;
  constructor(private productService:ProductService,
    private app:GlobalApp)
  {
    
  }
  ngOnInit(): void {
    
    this.cartItems=this.app.getCartItems();

    
    this.productInCart=this.cartItems.some((product)=>
     product.uuid===this.product.uuid
      
      
    );
    console.log(this.productInCart);
    

  }
  addItemToCart(){
    this.cartItems=this.app.getCartItems();
    this.cartItems.push(this.product)
    this.app.setCartItems(this.cartItems);
    this.updateCartButton();
    
  }
  updateCartButton()
  {
    this.productInCart=true;
  }
  

}
