import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../marketplace/types/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../marketplace/services/product.service';
import { GlobalApp } from '../common/global';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  @Input() product!: Product;
  cartItems!:Product[];
  productInCart:boolean=false;
  constructor(
    private app:GlobalApp,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; 
      this.getProductDetails(productId);
    });
    this.cartItems=this.app.getCartItems();
    this.productInCart=this.cartItems.some((product)=>
     product.uuid===this.product.uuid
      
      
    );
  }

  getProductDetails(productId: number): void {
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
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
