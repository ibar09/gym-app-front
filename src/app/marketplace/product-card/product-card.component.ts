import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product.interface';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  product!:Product;
  constructor(private productService:ProductService)
  {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (result)=>{
        this.product=result.items[0];
        
      }
    )
  }
  

}
